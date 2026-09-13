const API_URL = "https://postres-diosa-api.onrender.com";

export async function listarPedidos() {

    const respuesta = await fetch(`${API_URL}/pedidos`);

    if (!respuesta.ok) {
        throw new Error(`Error al listar pedidos: ${respuesta.status}`);
    }

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

    if (!respuesta.ok) {
        throw new Error(`Error al crear pedido: ${respuesta.status}`);
    }

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

    if (!respuesta.ok) {
        throw new Error(`Error al actualizar pedido: ${respuesta.status}`);
    }

    return await respuesta.json();
}

export async function eliminarPedido(id) {

    const respuesta = await fetch(`${API_URL}/pedidos/${id}`, {
        method: "DELETE"
    });

    if (!respuesta.ok) {
        throw new Error(`Error al eliminar pedido: ${respuesta.status}`);
    }
}

export async function listarProductos() {

    const respuesta = await fetch(`${API_URL}/productos`);

    if (!respuesta.ok) {
        throw new Error(`Error al listar productos: ${respuesta.status}`);
    }

    return await respuesta.json();
}

export async function crearProducto(producto) {

    const respuesta = await fetch(`${API_URL}/productos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });

    if (!respuesta.ok) {
        throw new Error(`Error al crear producto: ${respuesta.status}`);
    }

    return await respuesta.json();
}

export async function actualizarProducto(id, producto) {

    const respuesta = await fetch(`${API_URL}/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });

    if (!respuesta.ok) {
        throw new Error(`Error al actualizar producto: ${respuesta.status}`);
    }

    return await respuesta.json();
}

export async function eliminarProducto(id) {

    const respuesta = await fetch(`${API_URL}/productos/${id}`, {
        method: "DELETE"
    });

    if (!respuesta.ok) {
        throw new Error(`Error al eliminar producto: ${respuesta.status}`);
    }
}

