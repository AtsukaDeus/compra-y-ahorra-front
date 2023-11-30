'use client'

import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const loggout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        alert('Se ha cerrado sesión!');
        window.location.replace('/login')
    }

    useEffect(() => {
        if(localStorage.getItem('token')) setIsUserLoggedIn(true);
    }, [])


return (
    <div>
    {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="/" className='ml-10'>Compra y Ahorra</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                data-bs-theme="dark"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        Compra y Ahorra
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {!isUserLoggedIn && (
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
                            <Nav.Link href="/signup">Registrarse</Nav.Link>
                        </Nav>
                    )}

                    {isUserLoggedIn && (
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link onClick={() => {loggout()}}>Cerrar Sesión</Nav.Link>
                        </Nav>
                    )}


                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    ))}
    </div>
);
}

export default NavBar;