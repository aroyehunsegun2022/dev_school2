import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css"

function Navbars() {
  return (
  
    <Navbar bg="dark" variant="dark" id="navs">
      <Container id="nav2">
        <Nav className="me-auto">
          <Link to='/' className="nav-link">Home</Link>
          <Link to='/Course' className="nav-link">Course/Modules</Link>
          <Link to='/Contact' className="nav-link">Contact</Link>
          <Link to='/About' className="nav-link">About</Link>

        </Nav>
      </Container>
    </Navbar>

  
  );
}

export default Navbars;
