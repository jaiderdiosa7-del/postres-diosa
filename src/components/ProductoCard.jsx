function ProductoCard({ producto }) {

    return (

        <div className="bg-white rounded-2xl shadow p-5">

            <h2 className="text-xl font-bold">
                🍰 {producto.nombre}
            </h2>

            <p className="text-gray-500">
                {producto.categoria}
            </p>

            <p className="text-pink-600 font-bold text-lg mt-3">
                ${producto.precio}
            </p>

        </div>
    );
}

export default ProductoCard;