import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import ProductoCard from "../components/ProductoCard";

import {
    listarProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} from "../services/api";

function Productos() {

    const [productos, setProductos] = useState([]);

    const [formulario, setFormulario] = useState({
        nombre: "",
        categoria: "",
        precio: 0
    });

    const [productoEditando, setProductoEditando] = useState(null);

    const [mensaje, setMensaje] = useState("");

    const [productoAEliminar, setProductoAEliminar] = useState(null);

    useEffect(() => {

        cargarProductos();

    }, []);

    async function cargarProductos() {

        try {

            const datos = await listarProductos();

            setProductos(datos);

        } catch (error) {

            console.error("Error al cargar productos:", error);

        }
    }

    function manejarCambio(event) {

        const { name, value } = event.target;

        setFormulario({
            ...formulario,
            [name]: name === "precio"
                ? Number(value)
                : value
        });
    }

    async function manejarSubmit(event) {

        event.preventDefault();

        if (
            formulario.nombre.trim() === "" ||
            formulario.categoria.trim() === "" ||
            formulario.precio <= 0
        ) {

            setMensaje("Completa todos los campos correctamente.");

            return;
        }

        try {

            if (productoEditando) {

                await actualizarProducto(
                    productoEditando.id,
                    formulario
                );

                setMensaje("Producto actualizado correctamente.");

            } else {

                await crearProducto(formulario);

                setMensaje("Producto creado correctamente.");
            }

            setFormulario({
                nombre: "",
                categoria: "",
                precio: 0
            });

            setProductoEditando(null);

            cargarProductos();

        } catch (error) {

            setMensaje("No se pudo guardar el producto.");

            console.error(error);
        }
    }

    function editarProducto(producto) {

            window.scrollTo({
        top: 0,
        behavior: "smooth"
         });

        setProductoEditando(producto);

        setFormulario({
            nombre: producto.nombre,
            categoria: producto.categoria,
            precio: producto.precio
        });

        setMensaje("");
    }

    function solicitarEliminarProducto(producto) {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        setProductoAEliminar(producto);
    }

    async function borrarProducto(id) {

        try {

            await eliminarProducto(id);

            setMensaje("Producto eliminado correctamente.");

            setProductoAEliminar(null);

            cargarProductos();

            setTimeout(() => {
                setMensaje("");
            }, 3000);

        } catch (error) {

            setMensaje("No se pudo eliminar el producto.");

            console.error(error);
        }
    }

    function cancelarEdicion() {

        setProductoEditando(null);

        setFormulario({
            nombre: "",
            categoria: "",
            precio: 0
        });

        setMensaje("");
    }

    return (

        <>

            <Navbar />

            <main className="p-8 bg-gradient-to-br from-black via-blue-900 to-purple-800 min-h-screen">

                <h1 className="text-white text-4xl font-bold mb-8">
                    Productos
                </h1>

                
 
                <form
                    onSubmit={manejarSubmit}
                    className="bg-slate-950 text-white p-6 rounded-2xl shadow-lg mb-8"
                >

                    <h2 className="text-2xl font-bold mb-6">

                        {productoEditando
                            ? "Producto en edición"
                            : "Crear producto"}

                    </h2>

                    <div className="space-y-5">

                        

                        <div>

                            <label className="text-white block mb-2 font-medium">
                                Nombre del producto
                            </label>

                            <input
                                type="text"
                                name="nombre"
                                value={formulario.nombre}
                                onChange={manejarCambio}
                                placeholder="Escribe el nombre del producto"
                                className="bg-gray-300 text-black border p-3 rounded-lg w-full"
                            />

                        </div>

                       

                        <div>

                            <label className="text-white block mb-2 font-medium">
                                Categoría
                            </label>

                            <input
                                type="text"
                                name="categoria"
                                value={formulario.categoria}
                                onChange={manejarCambio}
                                placeholder="Escribe la categoría"
                                className="bg-gray-300 text-black border p-3 rounded-lg w-full"
                            />

                        </div>

                        

                        <div>

                            <label className="text-white block mb-2 font-medium">
                                Precio del producto
                            </label>

                            <input
                                type="number"
                                name="precio"
                                min="1"
                                value={formulario.precio}
                                onChange={manejarCambio}
                                placeholder="Ej: 7000"
                                className="bg-gray-300 text-black border p-3 rounded-lg w-full"
                            />

                        </div>

                    </div>

                    

                    <div className="flex gap-3 mt-6">

                        <button
                            type="submit"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg font-bold"
                        >

                            {productoEditando
                                ? "Actualizar producto"
                                : "Crear producto"}

                        </button>

                        {productoEditando && (

                            <button
                                type="button"
                                onClick={cancelarEdicion}
                                className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-3 rounded-lg font-bold"
                            >
                                Cancelar edición
                            </button>

                        )}

                    </div>

                    {mensaje && (

                        <p className="text-green-400 mt-4">
                            {mensaje}
                        </p>

                    )}

                </form>

                {productoAEliminar && (

                    <div className="bg-black border border-white rounded-2xl p-6 mb-6 text-white">

                        <div className="bg-black border border-white rounded-2xl p-6 text-white w-full max-w-md shadow-2xl">

                            <h2 className="text-2xl font-bold mb-3">
                                Eliminar producto
                            </h2>

                            <p className="mb-5">
                                ¿Seguro que quieres eliminar el producto de{" "}
                                <strong>{productoAEliminar.nombre}</strong>?
                            </p>

                            <div className="flex gap-3">

                                <button
                                    type="button"
                                    onClick={() => borrarProducto(productoAEliminar.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-bold"
                                >
                                    Eliminar producto
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setProductoAEliminar(null)}
                                    className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg font-bold"
                                >
                                    Cancelar
                                </button>

                            </div>

                        </div>

                    </div>

                )}

                
                <h2 className="text-white text-2xl font-bold mb-5">
                    Productos disponibles
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {productos.map((producto) => (

                        <ProductoCard
                            key={producto.id}
                            producto={producto}
                            onEditar={editarProducto}
                            onEliminar={solicitarEliminarProducto}
                        />

                    ))}

                </div>

            </main>

        </>
    );
}

export default Productos;

