import React from 'react'
import "../App.css"
import { Navbar,Container,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Navii() {
    return (
      <div>
        <nav>
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            className="fixed-top navv wrapper"
          >
            <Container>
              <Navbar.Brand href="#home">
                <Link to="/Acceuil">
                  <h4>E-events</h4>
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
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
                </Nav>

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
              </Navbar.Collapse>
            </Container>
          </Navbar> 
        </nav>
      </div>
    );
}
