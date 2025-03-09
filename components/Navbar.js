"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";

function NavBar() {
  const pathname = usePathname();
  //console.log("pathname is", pathname);
  return (
    <Container className="container-xl ">
      <Navbar
        bg="primary"
        data-bs-theme="dark"
        className="px-2 rounded-bottom-2"
      >
        {/* <Navbar.Brand
          as={Link}
          href="/"
          className={classNames("nav mx-3", {
            active: pathname === "/",
          })}
        >
          Home
        </Navbar.Brand> */}
        {/* <Navbar.Brand href="/skills">Skills</Navbar.Brand>
        <Navbar.Brand href="/projects">Projects</Navbar.Brand>
        <Navbar.Brand href="/honours">Grades & Honours</Navbar.Brand> */}

        <Nav className="me-auto  ">
          <Nav.Link
            as={Link}
            href="/"
            className={classNames("nav mx-3 ", {
              active: pathname === "/",
            })}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            href="/skills"
            className={classNames("nav mx-3", {
              active: pathname === "/skills",
            })}
          >
            Skills
          </Nav.Link>
          <Nav.Link
            as={Link}
            href="/projects"
            className={classNames("nav mx-3", {
              active: pathname === "/projects",
            })}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            as={Link}
            href="/honours"
            className={classNames("nav mx-3", {
              active: pathname === "/honours",
            })}
          >
            Grades & Honours
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default NavBar;
