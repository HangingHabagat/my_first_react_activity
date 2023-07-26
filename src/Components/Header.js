import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return ( 
        <header> 
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Nav className="me-auto">
            <Nav.Link href='/home' activeStyle>
            HomePage
            </Nav.Link>
            <Nav.Link href='/about' activeStyle>
              About Us
            </Nav.Link>
            <Nav.Link href='/contact' activeStyle>
              Contact Us
            </Nav.Link>
            <Nav.Link href='/blog' activeStyle>
              BlogPage
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </header>
    );
  };
  
  export default Header;