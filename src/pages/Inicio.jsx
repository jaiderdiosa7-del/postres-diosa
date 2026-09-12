import Navbar from "../components/Navbar";

function Inicio() {

    return (

        <>

            <Navbar />

            <main className="p-8">

                <h1 className="text-4xl font-bold mb-4">
                    Bienvenido a Postres Diosa 🍰
                </h1>

                <p className="text-gray-600 text-lg">
                    Administra tus pedidos y productos desde un solo lugar.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-8">

                    <div className="bg-pink-100 p-6 rounded-2xl">

                        <h2 className="text-xl font-bold">
                            📋 Pedidos
                        </h2>

                        <p>
                            Registra, consulta, edita y elimina pedidos.
                        </p>

                    </div>

                    <div className="bg-purple-100 p-6 rounded-2xl">

                        <h2 className="text-xl font-bold">
                            🍰 Productos
                        </h2>

                        <p>
                            Consulta los sabores disponibles.
                        </p>

                    </div>

                    <div className="bg-yellow-100 p-6 rounded-2xl">

                        <h2 className="text-xl font-bold">
                            🚚 Entregas
                        </h2>

                        <p>
                            Controla el estado de cada pedido.
                        </p>

                    </div>

                </div>

            </main>

        </>
    );
}

export default Inicio;