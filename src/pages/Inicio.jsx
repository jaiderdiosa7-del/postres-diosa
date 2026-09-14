import Navbar from "../components/Navbar";

function Inicio() {

    return (

        <>

            <Navbar />

            <main className="min-h-screen w-full bg-gradient-to-br from-black via-blue-900 to-purple-800 p-8">

                

                <section className="text-center max-w-4xl mx-auto pt-10">

                    <h1 className="text-white text-5xl font-bold mb-5">
                        Bienvenido a Postres Diosa
                    </h1>

                    <p className="text-gray-200 text-xl leading-relaxed">
                        Donde cada pedido lleva un poco de dedicación,
                        sabor y mucho amor. 
                    </p>

                    <p className="text-gray-400 mt-3 text-lg">
                        Administra tus pedidos, productos y entregas
                        de una manera sencilla.
                    </p>

                </section>


                

                <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-14">

                    

                    <div className="bg-gradient-to-br from-black via-[#080F25] to-blue-800 border border-blue-500/30 p-7 rounded-2xl shadow-xl hover:scale-105 transition duration-300">

                        <div className="text-4xl mb-4">
                            
                        </div>

                        <h2 className="text-white text-2xl font-bold mb-3">
                            Pedidos
                        </h2>

                        <p className="text-gray-300 leading-relaxed">
                            Registra nuevos pedidos, consulta la información
                            de los clientes, edita y elimina pedidos cuando
                            sea necesario.
                        </p>

                    </div>


                    

                    <div className="bg-gradient-to-br from-black via-[#16002B] to-purple-800 border border-purple-500/30 p-7 rounded-2xl shadow-xl hover:scale-105 transition duration-300">

                        <div className="text-4xl mb-4">
                            
                        </div>

                        <h2 className="text-white text-2xl font-bold mb-3">
                            Productos
                        </h2>

                        <p className="text-gray-300 leading-relaxed">
                            Administra los postres disponibles, agrega nuevos
                            productos, actualiza su información o elimina
                            los que ya no estén disponibles.
                        </p>

                    </div>


                    

                    <div className="bg-gradient-to-br from-black via-[#071A24] to-blue-700 border border-blue-400/30 p-7 rounded-2xl shadow-xl hover:scale-105 transition duration-300">

                        <div className="text-4xl mb-4">
                            
                        </div>

                        <h2 className="text-white text-2xl font-bold mb-3">
                            Entregas
                        </h2>

                        <p className="text-gray-300 leading-relaxed">
                            Consulta y controla el estado de cada pedido
                            para saber cuáles están pendientes, en
                            preparación, listos o entregados.
                        </p>

                    </div>

                </section>


                

                <section className="max-w-4xl mx-auto text-center mt-16">

                    <div className="border-t border-white/20 pt-8">

                        <p className="text-purple-200 text-lg italic">
                            "Cada postre comienza con una idea,
                            pero termina convirtiéndose en un momento especial."
                        </p>

                        <p className="text-gray-400 mt-3">
                            — Postres Diosa
                        </p>

                    </div>

                </section>

            </main>

        </>
    );
}

export default Inicio;
