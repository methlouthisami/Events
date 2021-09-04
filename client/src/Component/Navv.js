import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navv.css"
export default function Navv() {
  return (
    <div>
      <nav className="fixed-top wrapper">
        <Navbar collapseOnSelect expand="lg" className=" navv ">
          <Container>
            <Navbar.Brand href="#home">
              <Link to="/Acceuil">
                <h4>E-events</h4>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="">
                  <Link to="/Acceuil">
                    <h5>Acceuil</h5>
                  </Link>
                </Nav.Link>
                <Nav.Link href="/Events">
                  <Link to="/Events">
                    <h5>Events</h5>
                  </Link>
                </Nav.Link>
                <Nav.Link href="/AboutUs">
                  <Link to="/AboutUs">
                    <h5>AboutUs</h5>
                  </Link>
                </Nav.Link>

                <Nav.Link href="/Contact">
                  <Link to="/Contact">
                    <h5>Contact</h5>
                  </Link>
                </Nav.Link>
                <Nav.Link href="/favorit">
                  <Link to="/favorit">
                    <h5>Favorits</h5>
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    </div>
  );
}
