import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Form, Button} from 'react-bootstrap'
import Logo from '../components/images/logo.png'
import './navbar.css'
import {BsFillPersonFill, BsCart} from 'react-icons/bs'

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="Brand Logo" className='img-logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex gap-5 mx-5">
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Books</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Bags
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Furnitures</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4">
                Headphones
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Deals</Nav.Link>
            <Nav.Link href="#link">New</Nav.Link>
            <Nav.Link href="#link">Delivery</Nav.Link>
          </Nav>
          <Form className="d-flex gap-2 mx-5">
            <Form.Control
              type="search"
              placeholder="Search Product"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="d-flex gap-5 mx-5">
            <Nav.Link href="#home" className='d-flex align-items-center gap-2'><BsFillPersonFill /> Account</Nav.Link>
            <Nav.Link href="#link" className='d-flex align-items-center gap-2'> <BsCart /> Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;