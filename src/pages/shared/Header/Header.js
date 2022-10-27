import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import logo from "../../../assets/logo.png";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="lg" variant="lg">
      <Container>
        <Image className="logo-pic me-2" src={logo}></Image>
        <Navbar.Brand className="logo fw-bold me-auto" href="#home">
          Lms<span>One</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="me-2" to="/">
              Home
            </Link>
            <Link className="me-2" to="/courses">
              Courses
            </Link>
            <Link className="me-2" to="/faq">
              Faq
            </Link>
            <Link className="me-2" to="/blog">
              Blog
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
