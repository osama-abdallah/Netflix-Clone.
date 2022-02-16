import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";

export default function Nbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href={"/"}>Home</Nav.Link>
            <Nav.Link href={"/favList"}>Favorit List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
