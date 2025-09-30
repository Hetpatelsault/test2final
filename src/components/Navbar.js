import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Modal } from "react-bootstrap";

export default function MyNavbar() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Navbar bg="white" expand="lg" className="shadow-sm border-bottom">
                <Container>
                    <Navbar.Brand href="#hero" className="fw-bold text-primary">
                        Het Patel
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#hero">Deals</Nav.Link>
                            
                            <Button variant="outline-primary" className="ms-2 rounded-pill px-3">
                                @
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            {/* Modal */}
            <Modal show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Copyright Info</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    © 2025  Patel. All Rights Reserved.
                </Modal.Body>
            </Modal>
        </>
    );
}
