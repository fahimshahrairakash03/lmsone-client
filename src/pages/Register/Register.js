import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
const Register = () => {
  const { user, userCreate, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    userCreate(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handlegoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  return (
    <div>
      <h1 className="text-primary text-center">Please Register!</h1>
      <Form onSubmit={handleSubmit} className="mx-auto w-50 ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo</Form.Label>
          <Form.Control type="text" name="photoURL" placeholder="Enter Photo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Button className="d-block mb-2" variant="primary" type="submit">
          Register
        </Button>
        <Button
          onClick={handlegoogleSignIn}
          className="mb-2"
          variant="outline-success"
        >
          Signin With Google <FaGoogle></FaGoogle>
        </Button>{" "}
        <Button variant="outline-dark">
          Signin With Github <FaGithub></FaGithub>{" "}
        </Button>
        <p>
          Alreary have an account? <Link to="/login">Login</Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
