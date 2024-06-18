import React from 'react';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" class="nav-link">Home</Link>
            <Link to="/about" class="nav-link">About</Link>
            <Link to="/sign" class="nav-link">Sign in</Link>
            <Link to="/product" class="nav-link">Product</Link>
            <Link to="/admin/category/add" class="nav-link">Add User</Link>
            <Link to="/admin/category/list" class="nav-link">User List</Link>


            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header