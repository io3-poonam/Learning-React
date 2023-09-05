import {  useNavigate } from "react-router-dom";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Header = () => {
  const navigate = useNavigate();
  const HandleHome = () => {
    navigate("/home");
  };
  const HandleAbout = () => {
    navigate("/About");
  };
  const HandleServices = () => {
    navigate("/Services");
  };
  const HandleContact = () => {
    navigate("/Contact");
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary sticky-top">
        <Container fluid className="mx-auto col-10 flex-grow-0">
          <Navbar.Brand to="/"style={{color:"skyblue"}}>Techno Graphy</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="nav-link active" to={"/Home"} onClick={HandleHome}>
                Home
              </Nav.Link>
              <Nav.Link className="nav-link active" to={"/About"} onClick={HandleAbout}>
                About
              </Nav.Link>
              <Nav.Link className="nav-link active" to={"/Services"} onClick={HandleServices}>
                Service
              </Nav.Link>
              <Nav.Link className="nav-link active" to={"/Contact"} onClick={HandleContact}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
