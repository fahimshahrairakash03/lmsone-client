import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseSummary = ({ course }) => {
  const { _id, title, image_url, details } = course;
  return (
    <div>
      <Card className="text-center w-60 mx-auto mb-4">
        <Card.Header>Featured</Card.Header>
        <Card.Img
          variant="top"
          style={{ height: "300px" }}
          src={course.image_url}
        />
        <Card.Body>
          <Card.Title>{course.title}</Card.Title>
          <Card.Text>{course.details}</Card.Text>

          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Download</Card.Footer>
      </Card>
    </div>
  );
};

export default CourseSummary;
