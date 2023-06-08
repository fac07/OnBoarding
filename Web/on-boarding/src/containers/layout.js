import React from "react";
import PropTypes from "prop-types";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Layout(props) {

    return (
        <div>
            <Navbar bg="dark"  variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">OnBoarding</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/evaluaciones">Evaluaciones</Nav.Link>
                        <NavDropdown title="Maestros" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Recursos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Habilidades
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Actitudes</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Reportes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/reportes">Evaluaciones</NavDropdown.Item>
                            <NavDropdown.Item href="#action">Plan/Alcance</NavDropdown.Item>
                            <NavDropdown.Item href="#action2">Desvinculaciones</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main style={{padding: "10px"}}>
                {props.children}
            </main>
        </div>
    );
    }

    Layout.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(
        typeof Element === "undefined" ? Object : Element
    ),
    };

export default Layout;
