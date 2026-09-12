const API_URL = "http://localhost:3000";

export async function listarPedidos() {
    const respuesta = await fetch(`${API_URL}/pedidos`);
    return await respuesta.json();
}

export async function crearPedido(pedido) {
    const respuesta = await fetch(`${API_URL}/pedidos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pedido)
    });

    return await respuesta.json();
}

export async function actualizarPedido(id, pedido) {
    const respuesta = await fetch(`${API_URL}/pedidos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pedido)
    });

    return await respuesta.json();
}

export async function eliminarPedido(id) {
    await fetch(`${API_URL}/pedidos/${id}`, {
        method: "DELETE"
    });
}

export async function listarProductos() {
    const respuesta = await fetch(`${API_URL}/productos`);
    return await respuesta.json();
}