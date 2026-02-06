import Navbar from "../components/Navbar";
import AreaCard from "../components/AreaCard";

export default function Areas() {
  const areas = [
    { id: 1, nombre: "Matemáticas", color: "#ff7675" },
    { id: 2, nombre: "Lógica", color: "#74b9ff" },
    { id: 3, nombre: "Cultura General", color: "#55efc4" }
  ];

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Áreas de conocimiento</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          {areas.map(area => (
            <AreaCard key={area.id} area={area} />
          ))}
        </div>
      </div>
    </>
  );
}
