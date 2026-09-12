import EstadoPedido from "./EstadoPedido";

function PedidoCard({
    pedido,
    onEditar,
    onEliminar,
    onCambiarEstado
}) {

    return (

        <div className="bg-white rounded-2xl shadow p-5">

            <div className="flex justify-between items-start">

                <div>

                    <h2 className="text-xl font-bold">
                        {pedido.cliente}
                    </h2>

                    <p>📞 {pedido.telefono}</p>

                    <p>📍 {pedido.direccion}</p>

                </div>

                <EstadoPedido
                    estado={pedido.estado}
                    onCambiarEstado={(nuevoEstado) =>
                        onCambiarEstado(pedido.id, nuevoEstado)
                    }
                />

            </div>

            <hr className="my-4" />

            <p>
                🍰 Sabor: <strong>{pedido.sabor}</strong>
            </p>

            <p>
                🔢 Cantidad: <strong>{pedido.cantidad}</strong>
            </p>

            <p>
                💰 Precio: <strong>${pedido.precio}</strong>
            </p>

            <div className="flex gap-3 mt-4">

                <button
                    onClick={() => onEditar(pedido)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                    Editar
                </button>

                <button
                    onClick={() => onEliminar(pedido.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                    Eliminar
                </button>

            </div>

        </div>
    );
}

export default PedidoCard;