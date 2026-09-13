function EstadoPedido({ estado }) {
  return (
    <div>
      <label>Estado:  </label>

      <span className="bg-gray-300 text-black border rounded-lg p-2 font-semibold">{estado}</span>
    </div>
  );
}

export default EstadoPedido;

