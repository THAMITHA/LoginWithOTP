import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Headers = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ThamithaCloud</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#home">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
