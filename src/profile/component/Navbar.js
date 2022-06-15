import React from 'react'

import { Navbar,Nav,Container } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Profile</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#FullName">FullName</Nav.Link>
      <Nav.Link href="#features">Bio</Nav.Link>
      <Nav.Link href="#pricing">Profession</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    )
}

export default NavBar ;