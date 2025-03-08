"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function NavBar() {
  return (
    <Container className="container-xl ">
      <Navbar
        bg="primary"
        data-bs-theme="dark"
        className="px-2 rounded-bottom-2"
      >
        <Navbar.Brand href="/" className="nav me-3">
          Home
        </Navbar.Brand>
        {/* <Navbar.Brand href="/skills">Skills</Navbar.Brand>
        <Navbar.Brand href="/projects">Projects</Navbar.Brand>
        <Navbar.Brand href="/honours">Grades & Honours</Navbar.Brand> */}

        <Nav className="me-auto border-start border-white">
          <Nav.Link href="/skills" className="nav mx-3">
            Skills
          </Nav.Link>
          <Nav.Link href="/projects" className="nav mx-3">
            Projects
          </Nav.Link>
          <Nav.Link href="/honours" className="nav mx-3">
            Grades & Honours
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default NavBar;
