import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>Bienvenido a Cognify</h1>
        <p>Aprende resolviendo retos y gana puntos</p>

        <div>
          <h3>Nivel: 1</h3>
          <h3>Puntos: 120</h3>
        </div>
      </div>
    </>
  );
}


