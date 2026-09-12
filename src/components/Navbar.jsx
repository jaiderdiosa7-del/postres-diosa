import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Navbar() {

    const { usuario, cerrarSesion } = useAuth();

    const navigate = useNavigate();

    function salir() {

        cerrarSesion();

        navigate("/login");
    }

    return (

        <nav className="bg-pink-500 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4">

            <h1 className="text-xl font-bold">
                🍰 Postres Diosa
            </h1>

            <div className="flex gap-4 items-center">

                <Link to="/inicio">
                    Inicio
                </Link>

                <Link to="/pedidos">
                    Pedidos
                </Link>

                <Link to="/productos">
                    Productos
                </Link>

                <span>
                    👤 {usuario}
                </span>

                <button
                    onClick={salir}
                    className="bg-white text-pink-500 px-3 py-1 rounded-lg"
                >
                    Salir
                </button>

            </div>

        </nav>
    );
}

export default Navbar;