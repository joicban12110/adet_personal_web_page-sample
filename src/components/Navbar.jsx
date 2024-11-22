import { Link } from "react-router-dom";  
import Button from 'react-bootstrap/Button';  
import Container from 'react-bootstrap/Container';  
import Form from 'react-bootstrap/Form';  
import Nav from 'react-bootstrap/Nav';  
import Navbar from 'react-bootstrap/Navbar';  
import NavDropdown from 'react-bootstrap/NavDropdown';  

const CustomNavbar = () => {  
  return (  
    <Navbar expand="lg" className="bg-body-tertiary">  
      <Container fluid>  
        <Navbar.Brand as={Link} to="/">Menu</Navbar.Brand>  
        <Navbar.Toggle aria-controls="navbarScroll" />  
        <Navbar.Collapse id="navbarScroll">  
          <Nav  
            className="me-auto my-2 my-lg-0"  
            style={{ maxHeight: '100px' }}  
            navbarScroll  
          >  
            <Nav.Link as={Link} to="/">Home</Nav.Link>  
            <Nav.Link as={Link} to="/about">About</Nav.Link>  
            <NavDropdown title="More" id="navbarScrollingDropdown">  
              <NavDropdown.Item as={Link} to="/education">Education</NavDropdown.Item>  
              <NavDropdown.Item as={Link} to="/hobbies">Hobbies</NavDropdown.Item>  
              <NavDropdown.Item as={Link} to="/gallery">Gallery</NavDropdown.Item> {/* Added Gallery link */}  
              <NavDropdown.Divider />  
              <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>  
            </NavDropdown>  
            <Nav.Link as={Link} to="/contact" disabled>  
              Others   
            </Nav.Link>  
          </Nav>  
          <Form className="d-flex">  
            <Form.Control  
              type="search"  
              placeholder="Search"  
              className="me-2"  
              aria-label="Search"  
            />  
            <Button variant="outline-success">Search</Button>  
          </Form>  
        </Navbar.Collapse>  
      </Container>  
    </Navbar>  
  );  
};  

export default CustomNavbar;