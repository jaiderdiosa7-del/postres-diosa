function ProductoCard({
    producto,
    onEditar,
    onEliminar
}) {

    return (

        <div className="bg-gray-300 text-black rounded-2xl shadow-lg p-5">

            <h2 className="text-black text-xl font-bold">
                {producto.nombre}
            </h2>

            <p className="text-black">
                {producto.categoria}
            </p>

            <p className="text-black font-bold text-lg mt-3">
                ${producto.precio}
            </p>

            <div className="flex gap-3 mt-5">

                <button
                    onClick={() => onEditar(producto)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                    Editar
                </button>

                <button
                    onClick={() => onEliminar(producto)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                >
                    Eliminar
                </button>

            </div>

        </div>
    );
}

export default ProductoCard;

