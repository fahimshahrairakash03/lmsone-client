import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import logo from "../../../assets/logo.png";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider.js";
import DarkModeToggle from "react-dark-mode-toggle";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <Navbar collapseOnSelect expand="lg" bg="lg" variant="lg">
      <Container className="align-items-center">
        <Image className="logo-pic mt-0 me-2" src={logo}></Image>
        <Navbar.Brand className="logo  my-auto  fw-bold me-auto" href="#home">
          {" "}
          Lms<span>One</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto  align-center">
            <Link className="nav-menu mt-3 me-2" to="/">
              Home
            </Link>
            <Link className="nav-menu mt-3 me-2" to="/courses">
              Courses
            </Link>
            <Link className="nav-menu mt-3 me-2" to="/faq">
              Faq
            </Link>
            <Link className="nav-menu mt-3 me-2" to="/blog">
              Blog
            </Link>
            <Link className="nav-menu mt-3 me-2" to="/register">
              Register
            </Link>
            <p>
              {user?.uid ? (
                <>
                  <span className="me-2 ">{user?.displayName}</span>

                  <Button className="me-2 mt-2" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <Link className="nav-menu mt-3 me-2" to="/login">
                  Login
                </Link>
              )}
            </p>
            {user?.photoURL ? (
              <Image
                className="mt-3 me-2"
                style={{ height: "30px" }}
                roundedCircle
                src={user.photoURL}
              ></Image>
            ) : (
              <FaUserAlt className="mt-3 me-2"></FaUserAlt>
            )}

            <DarkModeToggle
              className="mt-3"
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={50}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
