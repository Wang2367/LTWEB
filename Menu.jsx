import { NavLink } from "react-router-dom";
import { Navbar, Nav, Form, Button } from "react-bootstrap";

function Menu() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#2f343a", padding: "10px 40px" }}>
      <Nav className="me-auto d-flex flex-row gap-4">
        <NavLink
          to="/home"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#ff9800" : "white",
            fontWeight: "bold",
          })}
        >
          HOME
        </NavLink>

        <NavLink
          to="/dien-thoai"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#ff9800" : "white",
            fontWeight: "bold",
          })}
        >
          PRODUCTS
        </NavLink>
      </Nav>

      <Form className="d-flex">
        <Form.Control type="search" placeholder="Search" className="me-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  );
}

export default Menu;
