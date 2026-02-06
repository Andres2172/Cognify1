export default function RetoCard({ reto }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      marginBottom: "10px",
      borderRadius: "8px"
    }}>
      <h4>{reto.titulo}</h4>
      <p>Dificultad: {reto.dificultad}</p>
      <p>Puntos: {reto.puntos}</p>
      <button>Iniciar reto</button>
    </div>
  );
}
