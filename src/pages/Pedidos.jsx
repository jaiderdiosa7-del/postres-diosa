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

    const [mensaje, setMensaje] = useState("");

    const [pedidoAEliminar, setPedidoAEliminar] = useState(null);

    const [cargando, setCargando] = useState(true);

    const [error, setError] = useState("");

    const [vista, setVista] = useState("gestionar");

    const [orden, setOrden] = useState("asc");

    useEffect(() => {

        cargarPedidos();

    }, []);

    async function cargarPedidos() {
        try {
            setCargando(true);
            setError("");

            const datos = await listarPedidos();
            setPedidos(datos);
        } catch (error) {
            console.error(error);
            setError("No se pudieron cargar los pedidos. Verifica la conexión con el servidor.");
        } finally {
            setCargando(false);
        }
    }

    async function guardarPedido(pedido) {

        try {

            if (pedidoEditando) {

                console.log("ESTOY ACTUALIZANDO");

                await actualizarPedido(
                    pedidoEditando.id,
                    pedido
                );

                setPedidoEditando(null);

                setMensaje(" Pedido actualizado correctamente");

            } else {

                console.log("ESTOY CREANDO");

                await crearPedido(pedido);

                setMensaje(" Pedido creado correctamente");
            }

           await cargarPedidos();

        } catch (error) {

            console.error(error);

            setMensaje(" Ocurrió un error al guardar el pedido");
        }
    }

    function solicitarEliminar(pedido) {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    setPedidoAEliminar(pedido);
    }

    async function borrarPedido(id) {

        try {

            await eliminarPedido(id);

            setMensaje(" Pedido eliminado correctamente");

            setPedidoAEliminar(null);

            cargarPedidos();

            setTimeout(() => {
                setMensaje("");
            }, 3000);

        } catch (error) {

            setMensaje("Ocurrió un error al eliminar el pedido");

            console.error(error);
        }
    }

    
    const pedidosFiltrados = pedidos
        .filter((pedido) => {

            const texto = busqueda.toLowerCase();

            const cliente = pedido.cliente
                ?.toLowerCase() || "";

            const sabor = pedido.sabor
                ?.toLowerCase() || "";

            return (
                cliente.includes(texto) ||
                sabor.includes(texto)
            );
        })
        .sort((a, b) => {

            const clienteA = a.cliente?.toLowerCase() || "";
            const clienteB = b.cliente?.toLowerCase() || "";

            if (orden === "asc") {
                return clienteA.localeCompare(clienteB);
            }

            return clienteB.localeCompare(clienteA);
        });

    
    function cambiarOrden() {

        setOrden(
            orden === "asc"
                ? "desc"
                : "asc"
        );
    }

    function editarPedido(pedido) {
    setPedidoEditando(pedido);
    setVista("crear");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    setPedidoEditando(pedido);
    }

    return (

        <>

            <Navbar />

            <main className="min-h-screen p-8 border border-white bg-gradient-to-br from-black via-purple-950 to-fuchsia-950">

                <h1 className="text-white text-4xl font-bold mb-6">
                    Pedidos
                </h1>

                {mensaje && (
                    <div className="bg-emerald-500 text-white font-bold p-3 rounded-xl mb-6">
                        {mensaje}
                    </div>
                )}

                {cargando && (
                    <div className="text-white text-center py-6">
                        <p>Cargando pedidos...</p>
                    </div>
                )}

                {error && (
                    <div className="bg-red-500 text-white font-bold p-4 rounded-xl mb-6 text-center">
                        <p className="mb-3">
                            {error}
                        </p>

                        <button
                            type="button"
                            onClick={cargarPedidos}
                            className="bg-white text-black px-4 py-2 rounded-lg font-bold"
                        >
                            Reintentar
                        </button>
                    </div>
                )}

                <div className="flex gap-3 mb-6">
                    <button
                        type="button"
                        onClick={() => setVista("crear")}
                        className="bg-purple-600 text-white px-5 py-2 rounded-lg font-bold"
                    >
                        Crear pedido
                    </button>

                    <button
                        type="button"
                        onClick={() => setVista("gestionar")}
                        className="bg-fuchsia-600 text-white px-5 py-2 rounded-lg font-bold"
                    >
                        Gestionar pedidos
                    </button>
                </div>

              {vista === "crear" && (
                    <div>
                        <h2 className="text-white text-2xl font-bold mb-4">
                            {pedidoEditando ? "Pedido en edicion" : "Crear pedido"}
                        </h2>

                        <FormularioPedido
                            onGuardar={guardarPedido}
                            pedidoEditando={pedidoEditando}
                            onCancelar={() => {setPedidoEditando(null);
                                              setVista("gestionar");
                            }}
                                            
                        />
                    </div>
                )}

                {pedidoAEliminar && (

                <div className="bg-black border border-white rounded-2xl p-6 mb-6 text-white">

                    <h2 className="text-2xl font-bold mb-3">
                        Eliminar pedido
                    </h2>

                    <p className="mb-5">
                        ¿Seguro que quieres eliminar el pedido de: {" "}
                        <strong>{pedidoAEliminar.cliente}</strong>?
                    </p>

                    <div className="flex gap-3">


                        <button
                            type="button"
                            onClick={() => borrarPedido(pedidoAEliminar.id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-bold"
                        >
                            Eliminar pedido
                        </button>

                        <button
                            type="button"
                            onClick={() => setPedidoAEliminar(null)}
                            className="bg-gray-200 hover:bg-gray-600 text-black px-5 py-2 rounded-lg font-bold"
                        >
                            Cancelar
                        </button>

                    </div>

                </div>

                )}

                {!cargando && !error && vista == "gestionar" && (
                    <>
                        <div className="flex gap-3 mb-6">

                            <input
                                type="text"
                                placeholder="Buscar por cliente o sabor..."
                                value={busqueda}
                                onChange={(event) =>
                                    setBusqueda(event.target.value)
                                }
                                className="text-white w-full border p-3 border-white rounded-lg"
                            />

                            <button
                                type="button"
                                onClick={cambiarOrden}
                                className="text-white border border-white rounded-lg px-5 font-bold whitespace-nowrap"
                            >
                                {orden === "asc"
                                    ? "Ordenar: A-Z"
                                    : "Ordenar: Z-A"}
                            </button>

                        </div>

                        {busqueda && pedidosFiltrados.length === 0 && (
                            <p className="text-red-400 font-bold mb-6">
                                No existe ningún pedido para "{busqueda}"
                            </p>
                        )}

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {pedidosFiltrados.map((pedido) => (

                                <PedidoCard
                                    key={pedido.id}
                                    pedido={pedido}
                                    onEditar={editarPedido}
                                    onEliminar={solicitarEliminar}
                                />

                            ))}

                        </div>
                    </>
                )}

            </main>

        </>

    );
}

export default Pedidos;

