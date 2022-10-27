import React from "react";
import { useLoaderData } from "react-router-dom";

import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  const { title, image_url, details } = course;
  console.log(course);
  return (
    <div>
      <Card className="w-50 mx-auto text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Img
          variant="top"
          style={{ height: "300px" }}
          src={course.image_url}
        />
        <Card.Body>
          <Card.Title>{course.title}</Card.Title>
          <Card.Text>{course.details}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Link to="/premium">
            {" "}
            <Button variant="warning">Premium Access</Button>{" "}
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CourseDetails;
