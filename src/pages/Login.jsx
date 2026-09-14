import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Login() {

    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [mostrarContraseña, setMostrarContraseña] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const { iniciarSesion } = useAuth();

    function manejarLogin(event) {

        event.preventDefault();

        setError("");

        if (nombre.trim() === "") {

            setError("Ingresa tu usuario");

            return;
        }

        if (contraseña.trim() === "") {

            setError("Ingresa tu contraseña");

            return;
        }

        const loginCorrecto = iniciarSesion(
            nombre,
            contraseña
        );

        if (!loginCorrecto) {

            setError("Usuario o contraseña incorrectos");

            return;
        }

        navigate("/inicio");
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(115deg,#000000_0%,#000000_35%,#6d28d9_48%,#a855f7_52%,#000000_65%,#000000_100%)]">

            <div className="border border-white bg-gradient-to-br from-black via-blue-900 to-purple-800 p-8 rounded-2xl shadow-lg w-full max-w-md">

                <h1 className="text-white text-3xl font-bold text-center mb-2">
                    Postres Diosa
                </h1>

                <p className="text-center text-gray-300 mb-6">
                    Agenda de pedidos
                </p>

                <form onSubmit={manejarLogin}>

                    {/* USUARIO */}

                    <label className="text-white block mb-2 font-medium">
                        Usuario
                    </label>

                    <input
                        type="text"
                        value={nombre}
                        onChange={(event) =>
                            setNombre(event.target.value)
                        }
                        placeholder="Escribe tu usuario"
                        className="text-gray-200 w-full border rounded-lg p-3 mb-4"
                    />

                    

                    <label className="text-white block mb-2 font-medium">
                        Contraseña
                    </label>

                    <div className="relative mb-4">

                        <input
                            type={mostrarContraseña ? "text" : "password"}
                            value={contraseña}
                            onChange={(event) =>
                                setContraseña(event.target.value)
                            }
                            placeholder="Escribe tu contraseña"
                            className="text-gray-200 w-full border rounded-lg p-3 pr-12"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setMostrarContraseña(!mostrarContraseña)
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-black transition"
                            aria-label={mostrarContraseña ? "Ocultar contraseña" : "Mostrar contraseña"}
                        >
                            {mostrarContraseña ? (
                                
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 15.375a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Z"
                                    />
                                </svg>
                            ) : (
                                
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3l18 18"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.584 10.584a2 2 0 0 0 2.832 2.832"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.88 5.09A9.77 9.77 0 0 1 12 4.875c6 0 9.75 6.75 9.75 6.75a17.2 17.2 0 0 1-3.042 3.9M6.228 6.228C3.822 7.752 2.25 11.625 2.25 11.625s3.75 6.75 9.75 6.75a9.77 9.77 0 0 0 3.042-.478"
                                    />
                                </svg>
                            )}
                        </button>

                    </div>

                    

                    {error && (
                        <p className="text-red-300 text-sm mb-4">
                             {error}
                        </p>
                    )}

                   

                    <button
                        type="submit"
                        className="w-full bg-white hover:bg-gray-200 text-black p-3 rounded-lg font-bold"
                    >
                        Iniciar sesión
                    </button>

                </form>

                

                <div className="mt-5 text-center text-gray-300 text-sm">
                    <p>Usuario: jaider</p>
                    <p>Contraseña: 2009</p>
                </div>

            </div>

        </div>
    );
}

export default Login;

