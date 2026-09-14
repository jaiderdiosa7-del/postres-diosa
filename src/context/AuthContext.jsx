import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [usuario, setUsuario] = useState(
        localStorage.getItem("usuario")
    );

    function iniciarSesion(nombre, contraseña) {

        nombre= nombre.trim();

        if (nombre === "jaider" && contraseña === "2009") {

            setUsuario(nombre);

            localStorage.setItem("usuario", nombre);

            return true;
        }

        return false;
    }

    function cerrarSesion() {

        setUsuario(null);

        localStorage.removeItem("usuario");
    }

    return (
        <AuthContext.Provider
            value={{
                usuario,
                iniciarSesion,
                cerrarSesion
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {

    return useContext(AuthContext);
}

