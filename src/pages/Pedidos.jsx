import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import PedidoCard from "../components/PedidoCard";
import FormularioPedido from "../components/FormularioPedido";

import {
    listarPedidos,
    crearPedido,
    actualizarPedido,
    eliminarPedido
} from "../services/api";

function Pedidos() {

    const [pedidos, setPedidos] = useState([]);

    const [busqueda, setBusqueda] = useState("");

    const [pedidoEditando, setPedidoEditando] = useState(null);

    useEffect(() => {

        cargarPedidos();

    }, []);

    async function cargarPedidos() {

        const datos = await listarPedidos();

        setPedidos(datos);
    }

    async function guardarPedido(pedido) {

        if (pedidoEditando) {

            await actualizarPedido(
                pedidoEditando.id,
                pedido
            );

            setPedidoEditando(null);

        } else {

            await crearPedido(pedido);
        }

        cargarPedidos();
    }

    async function borrarPedido(id) {

        const confirmar = confirm(
            "¿Seguro que quieres eliminar este pedido?"
        );

        if (!confirmar) return;

        await eliminarPedido(id);

        cargarPedidos();
    }

    const pedidosFiltrados = pedidos.filter((pedido) =>

        pedido.cliente
            .toLowerCase()
            .includes(busqueda.toLowerCase())

    );

    return (

        <>

            <Navbar />

            <main className="p-8 bg-gray-50 min-h-screen">

                <h1 className="text-4xl font-bold mb-6">
                    📋 Pedidos
                </h1>

                <FormularioPedido
                    onGuardar={guardarPedido}
                    pedidoEditando={pedidoEditando}
                    onCancelar={() => setPedidoEditando(null)}
                />

                <input
                    type="text"
                    placeholder="🔎 Buscar por cliente..."
                    value={busqueda}
                    onChange={(event) =>
                        setBusqueda(event.target.value)
                    }
                    className="w-full border p-3 rounded-lg mb-6"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {pedidosFiltrados.map((pedido) => (

                        <PedidoCard
                            key={pedido.id}
                            pedido={pedido}
                            onEditar={setPedidoEditando}
                            onEliminar={borrarPedido}
                        />

                    ))}

                </div>

            </main>

        </>
    );
}

export default Pedidos;