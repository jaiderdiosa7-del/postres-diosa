import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import ProductoCard from "../components/ProductoCard";

import { listarProductos } from "../services/api";

function Productos() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        cargarProductos();

    }, []);

    async function cargarProductos() {

        const datos = await listarProductos();

        setProductos(datos);
    }

    return (

        <>

            <Navbar />

            <main className="p-8 bg-gray-50 min-h-screen">

                <h1 className="text-4xl font-bold mb-8">
                    🍰 Nuestros postres
                </h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {productos.map((producto) => (

                        <ProductoCard
                            key={producto.id}
                            producto={producto}
                        />

                    ))}

                </div>

            </main>

        </>
    );
}

export default Productos;