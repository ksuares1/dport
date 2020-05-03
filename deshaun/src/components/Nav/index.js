import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Dgktheflutist</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
             <Nav.Link href="/press">Press</Nav.Link> 
             <Nav.Link href="/contact">Contact</Nav.Link> 
            <NavDropdown href="/schedule" title="Schedule" id="basic-nav-dropdown">
              <NavDropdown.Item href="/booking">Booking</NavDropdown.Item>
              <NavDropdown.Item href="/schedule">Schedule</NavDropdown.Item>
              <NavDropdown.Item href="/flute">Flute Repairs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Contact"></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button> 
          </Form>
        </Navbar.Collapse>
      </Navbar>

    )
}
export default NavBar;