import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Pedidos from "./pages/Pedidos";
import Productos from "./pages/Productos";

import { useAuth } from "./context/AuthContext";

function App() {

    const { usuario } = useAuth();

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/inicio"
                    element={
                        usuario
                            ? <Inicio />
                            : <Navigate to="/login" />
                    }
                />

                <Route
                    path="/pedidos"
                    element={
                        usuario
                            ? <Pedidos />
                            : <Navigate to="/login" />
                    }
                />

                <Route
                    path="/productos"
                    element={
                        usuario
                            ? <Productos />
                            : <Navigate to="/login" />
                    }
                />

                <Route
                    path="*"
                    element={
                        <Navigate to="/login" />
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;