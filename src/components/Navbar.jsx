import { NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Navbar() {

    const { usuario, cerrarSesion } = useAuth();

    const navigate = useNavigate();

    function salir() {

        cerrarSesion();

        navigate("/login");
    }

    return (

        <nav className="bg-gradient-to-br from-black via-[#050B1A] to-blue-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4">

            <h1 className="text-xl font-bold">
                 Postres Diosa
            </h1>

            <div className="flex gap-4 items-center">

                <NavLink
                    to="/inicio"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-white text-black px-4 py-2 rounded-xl font-bold"
                            : "text-white px-4 py-2 rounded-xl hover:bg-white/20"
                    }
                >
                    Inicio
                </NavLink>

                <NavLink
                    to="/pedidos"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-white text-black px-4 py-2 rounded-xl font-bold"
                            : "text-white px-4 py-2 rounded-xl hover:bg-white/20"
                    }
                >
                    Pedidos
                </NavLink>

                <NavLink
                    to="/productos"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-white text-black px-4 py-2 rounded-xl font-bold"
                            : "text-white px-4 py-2 rounded-xl hover:bg-white/20"
                    }
                >
                    Productos
                </NavLink>

                <div className="flex items-center gap-3 bg-white/10 border border-white/20 px-3 py-2 rounded-xl">

                    <div className="w-9 h-9 bg-purple-500 rounded-full flex items-center justify-center font-bold text-white">
                        {usuario?.charAt(0).toUpperCase()}
                    </div>

                    <div className="leading-tight">

                        <p className="text-xs text-gray-300">
                            Usuario
                        </p>

                        <p className="font-bold">
                            {usuario}
                        </p>

                    </div>

                </div>

                <button
                    onClick={salir}
                    className="bg-red-500 text-white px-4 py-2 rounded-xl font-bold hover:bg-red-600"
                >
                    Salir
                </button>

            </div>

        </nav>
    );
}

export default Navbar;

