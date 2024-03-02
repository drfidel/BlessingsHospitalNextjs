import React from 'react'
import Image from 'next/image'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body"  bg="light" data-bs-theme="light" fixed="top" >
        <Container fluid >
            <Navbar.Brand className="p-4" href="/"><Image src="/assets/img/logo.png" alt="logo" width={119} height={28}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mx-auto me-auto my-2 mb-0 h6 " style={{ maxHeight: '500px'}} navbarScroll>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/doctors">Doctors</Nav.Link>
                            <NavDropdown title="Pages" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Pharmacy</NavDropdown.Item>
                                <NavDropdown.Item href="services">Services</NavDropdown.Item>
                                <NavDropdown.Item href="departments">Departments</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Others</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Community" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Maternal</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">NCDs</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">HIV/AIDS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Pediatrics</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="contact">Contact</Nav.Link>
                            <Nav.Link href="">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <a className="btn_2 d-none d-lg-block" href="#">HOT LINE- 0800-858-858</a>
                        </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavigationBar