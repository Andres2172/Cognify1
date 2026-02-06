import { useNavigate } from "react-router-dom";

export default function AreaCard({ area }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/retos/${area.nombre}`)}
      style={{
        background: area.color,
        padding: "20px",
        borderRadius: "10px",
        cursor: "pointer",
        color: "#fff"
      }}
    >
      <h3>{area.nombre}</h3>
    </div>
  );
}
