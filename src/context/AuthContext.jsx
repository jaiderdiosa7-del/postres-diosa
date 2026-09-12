import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [usuario, setUsuario] = useState(
        localStorage.getItem("usuario")
    );

    function iniciarSesion(nombre) {

        setUsuario(nombre);

        localStorage.setItem("usuario", nombre);
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