function EstadoPedido({ estado, onCambiarEstado }) {
  const estados = [
    "Pendiente",
    "En preparación",
    "Listo",
    "Entregado",
    "Cancelado"
  ];

  return (
    <div>
      <label>Estado:</label>

      <select
        value={estado}
        onChange={(e) => onCambiarEstado(e.target.value)}
      >
        {estados.map((estadoDisponible) => (
          <option key={estadoDisponible} value={estadoDisponible}>
            {estadoDisponible}
          </option>
        ))}
      </select>
    </div>
  );
}

export default EstadoPedido;

