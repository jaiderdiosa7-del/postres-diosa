import { useEffect, useState } from "react";

function FormularioPedido({
    onGuardar,
    pedidoEditando,
    onCancelar
}) {

    const [formulario, setFormulario] = useState({
        cliente: "",
        telefono: "",
        direccion: "",
        sabor: "Maracuyá",
        cantidad: 1,
        precio: 7000,
        estado: "Pendiente"
    });

    useEffect(() => {

        if (pedidoEditando) {

            setFormulario(pedidoEditando);

        }

    }, [pedidoEditando]);

    function manejarCambio(event) {

        const { name, value } = event.target;

        setFormulario({
            ...formulario,
            [name]: name === "cantidad" || name === "precio"
                ? Number(value)
                : value
        });
    }

    function manejarSubmit(event) {

        event.preventDefault();

        if (
            formulario.cliente.trim() === "" ||
            formulario.telefono.trim() === "" ||
            formulario.direccion.trim() === ""
        ) {

            alert("Completa todos los campos obligatorios");

            return;
        }

        onGuardar(formulario);

        setFormulario({
            cliente: "",
            telefono: "",
            direccion: "",
            sabor: "Maracuyá",
            cantidad: 1,
            precio: 7000,
            estado: "Pendiente"
        });
    }

    return (

        <form
            onSubmit={manejarSubmit}
            className="bg-white p-6 rounded-2xl shadow mb-8"
        >

            <h2 className="text-2xl font-bold mb-5">

                {pedidoEditando
                    ? "Editar pedido"
                    : "Registrar pedido"}

            </h2>

            <div className="grid md:grid-cols-2 gap-4">

                <input
                    name="cliente"
                    value={formulario.cliente}
                    onChange={manejarCambio}
                    placeholder="Nombre del cliente"
                    className="border p-3 rounded-lg"
                />

                <input
                    name="telefono"
                    value={formulario.telefono}
                    onChange={manejarCambio}
                    placeholder="Teléfono"
                    className="border p-3 rounded-lg"
                />

                <input
                    name="direccion"
                    value={formulario.direccion}
                    onChange={manejarCambio}
                    placeholder="Dirección"
                    className="border p-3 rounded-lg"
                />

                <select
                    name="sabor"
                    value={formulario.sabor}
                    onChange={manejarCambio}
                    className="border p-3 rounded-lg"
                >
                    <option>Maracuyá</option>
                    <option>Mora</option>
                    <option>Lulo</option>
                    <option>Mango</option>
                    <option>Limón</option>
                    <option>Banano</option>
                </select>

                <input
                    type="number"
                    name="cantidad"
                    min="1"
                    value={formulario.cantidad}
                    onChange={manejarCambio}
                    className="border p-3 rounded-lg"
                />

                <select
                    name="estado"
                    value={formulario.estado}
                    onChange={manejarCambio}
                    className="border p-3 rounded-lg"
                >
                    <option>Pendiente</option>
                    <option>En preparación</option>
                    <option>Listo</option>
                    <option>Entregado</option>
                </select>

            </div>

            <div className="flex gap-3 mt-5">

                <button
                    type="submit"
                    className="bg-pink-500 text-white px-5 py-3 rounded-lg"
                >
                    {pedidoEditando ? "Actualizar" : "Guardar pedido"}
                </button>

                {pedidoEditando && (

                    <button
                        type="button"
                        onClick={onCancelar}
                        className="bg-gray-400 text-white px-5 py-3 rounded-lg"
                    >
                        Cancelar
                    </button>

                )}

            </div>

        </form>
    );
}

export default FormularioPedido;