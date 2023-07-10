import "../assets/css/navbar.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Nav className="navbar">
      <Nav.Item>
        <Link to="/">Home</Link> | <Link to="/favoritos">Favoritos</Link>
      </Nav.Item>
    </Nav>
  );
}
