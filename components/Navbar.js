"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Container className="container-xl">
      <Navbar
        bg="primary"
        data-bs-theme="dark"
        className="px-2 rounded-bottom-2"
      >
        <Navbar.Brand href="/">Home</Navbar.Brand>
        {/* <Navbar.Brand href="/skills">Skills</Navbar.Brand>
        <Navbar.Brand href="/projects">Projects</Navbar.Brand>
        <Navbar.Brand href="/honours">Grades & Honours</Navbar.Brand> */}

        <Nav className="me-auto">
          <Nav.Link href="/skills">Skills</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/honours">Grades & Honours</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default NavBar;
