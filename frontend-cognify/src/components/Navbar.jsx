import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Cognify</h2>

      <div style={styles.links}>
        <Link to="/dashboard" style={styles.link}>Inicio</Link>
        <Link to="/areas" style={styles.link}>Áreas</Link>
        <Link to="/progreso" style={styles.link}>Progreso</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 25px",
    backgroundColor: "#1e1e2f",
    color: "#fff"
  },
  logo: {
    margin: 0
  },
  links: {
    display: "flex",
    gap: "15px"
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500"
  }
};
