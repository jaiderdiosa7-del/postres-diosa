import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Login() {

    const [nombre, setNombre] = useState("");

    const navigate = useNavigate();

    const { iniciarSesion } = useAuth();

    function manejarLogin(event) {

        event.preventDefault();

        if (nombre.trim() === "") {

            alert("Ingresa tu nombre");

            return;
        }

        iniciarSesion(nombre);

        navigate("/inicio");
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-pink-50">

            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

                <h1 className="text-3xl font-bold text-center mb-2">
                    🍰 Postres Diosa
                </h1>

                <p className="text-center text-gray-500 mb-6">
                    Agenda de pedidos
                </p>

                <form onSubmit={manejarLogin}>

                    <label className="block mb-2 font-medium">
                        Nombre
                    </label>

                    <input
                        type="text"
                        value={nombre}
                        onChange={(event) =>
                            setNombre(event.target.value)
                        }
                        placeholder="Escribe tu nombre"
                        className="w-full border rounded-lg p-3 mb-4"
                    />

                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white p-3 rounded-lg font-bold hover:bg-pink-600"
                    >
                        Iniciar sesión
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login;