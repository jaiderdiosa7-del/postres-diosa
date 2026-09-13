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

    const [errores, setErrores] = useState({});

useEffect(() => {
    if (pedidoEditando) {
        setFormulario({...pedidoEditando});
    } else {
        setFormulario({
            cliente: "",
            telefono: "",
            direccion: "",
            sabor: "Maracuyá",
            cantidad: 1,
            precio: 7000,
            estado: "Pendiente"
        });
        setErrores({});
    }
}, [pedidoEditando]);

    function manejarCambio(event) {

        const { name, value } = event.target;

        setFormulario({
            ...formulario,
            [name]:
                name === "cantidad" || name === "precio"
                    ? Number(value)
                    : value
        });
    }

    function manejarSubmit(event) {

        event.preventDefault();

        const nuevosErrores = {};

        if (formulario.cliente.trim() === "") {
            nuevosErrores.cliente =
                "El nombre del cliente es obligatorio";
        }

        if (formulario.telefono.trim() === "") {
            nuevosErrores.telefono =
                "El teléfono es obligatorio";
        }

        if (formulario.direccion.trim() === "") {
            nuevosErrores.direccion =
                "La dirección es obligatoria";
        }

        if (formulario.cantidad < 1) {
            nuevosErrores.cantidad =
                "La cantidad debe ser mínimo 1";
        }

        setErrores(nuevosErrores);

        if (Object.keys(nuevosErrores).length > 0) {
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

        setErrores({});
    }

    return (

        <form
            onSubmit={manejarSubmit}
            className="bg-slate-950 border border-white text-white p-6 rounded-2xl shadow mb-8"
        >

            

            <h2 className="text-2xl font-bold mb-5">

                {pedidoEditando
                    ? "Pedido en edición"
                    : "Crear pedido"}

            </h2>

            <div className="text-white grid md:grid-cols-2 gap-4">

                

                <div>
                    <h2 className="text-white">
                        Nombre del cliente
                    </h2>
                    <input
                        name="cliente"
                        value={formulario.cliente}
                        onChange={manejarCambio}
                        placeholder="Nombre"
                        className="border p-3 rounded-lg w-full"
                    />

                    {errores.cliente && (
                        <p className="text-red-400 text-sm mt-1">
                             {errores.cliente}
                        </p>
                    )}

                </div>

                

                <div>

                    <h2 className="text-white ">
                        *Telefono
                    </h2>
                    <input
                        name="telefono"
                        value={formulario.telefono}
                        onChange={manejarCambio}
                        placeholder="Teléfono"
                        className="border p-3 rounded-lg w-full"
                    />

                    {errores.telefono && (
                        <p className="text-red-400 text-sm mt-1">
                             {errores.telefono}
                        </p>
                    )}

                </div>

                

                <div>
                    <h2 className="text-white">
                        *Dirección
                    </h2>
                    <input
                        name="direccion"
                        value={formulario.direccion}
                        onChange={manejarCambio}
                        placeholder="Dirección"
                        className="border p-3 rounded-lg w-full"
                    />

                    {errores.direccion && (
                        <p className="text-red-400 text-sm mt-1">
                             {errores.direccion}
                        </p>
                    )}

                </div>

               

                <div>
                    <h2  className="text-white">
                        *Sabor
                    </h2>
                    <select
                        name="sabor"
                        value={formulario.sabor}
                        onChange={manejarCambio}
                        className="border p-3 rounded-lg w-full"
                    >
                        <option className="bg-blue-200 text-black">Maracuyá</option>
                        <option className="bg-blue-200 text-black">Mora</option>
                        <option className="bg-blue-200 text-black">Lulo</option>
                        <option className="bg-blue-200 text-black">Mango</option>
                        <option className="bg-blue-200 text-black">Limón</option>
                        <option className="bg-blue-200 text-black">Banano</option>
                    </select>

                </div>

                

                <div>
                    <h2 className="text-white">
                        *Cantidad
                    </h2>
                    <input
                        type="number"
                        name="cantidad"
                        min="1"
                        value={formulario.cantidad}
                        onChange={manejarCambio}
                        className="border p-3 rounded-lg w-full"
                    />

                    {errores.cantidad && (
                        <p className="text-red-400 text-sm mt-1">
                             {errores.cantidad}
                        </p>
                    )}

                </div>

                

                <div>
                    <h2 className="text-white">
                        *Estado del pedido
                    </h2>
                    <select
                        name="estado"
                        value={formulario.estado}
                        onChange={manejarCambio}
                        className="border p-3 rounded-lg w-full"
                    >

                        <option className="bg-blue-200 text-black" value="Pendiente">
                             Pendiente
                        </option>

                        <option className="bg-blue-200 text-black" value="En preparación">
                             En preparación
                        </option>

                        <option className="bg-blue-200 text-black" value="Listo">
                             Listo
                        </option>

                        <option className="bg-blue-200 text-black" value="Entregado">
                             Entregado
                        </option>

                    </select>

                </div>

            </div>

            

            <div className="flex gap-3 mt-5">

                <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg font-bold"
                >

                    {pedidoEditando
                        ? "Actualizar pedido"
                        : "Crear pedido"}

                </button>

                {pedidoEditando && (

                    <button
                        type="button"
                        onClick={onCancelar}
                        className="bg-red-500 hover:bg-red-300 text-white px-5 py-3 rounded-lg font-bold"
                    >
                        Cancelar edición
                    </button>

                )}

            </div>

        </form>
    );
}

export default FormularioPedido;
