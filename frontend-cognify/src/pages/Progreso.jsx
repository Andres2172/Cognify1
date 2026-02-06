import Navbar from "../components/Navbar";

export default function Progreso() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Tu progreso</h2>
        <p>Retos completados: 5</p>
        <p>Puntos acumulados: 120</p>
        <p>Nivel actual: 1</p>
      </div>
    </>
  );
}
