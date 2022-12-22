import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import CourseList from "../shared/CourseList/CourseList";
const CourseCard = ({ course }) => {
  const { _id, title, image_url, details } = course;
  return (
    <Container>
      <Row>
        <Col lg="9">
          <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Img
              variant="top"
              style={{ height: "300px" }}
              src={course.image_url}
            />
            <Card.Body>
              <Card.Title>{course.title}</Card.Title>
              <Card.Text>{course.details}</Card.Text>
              <Link to={`/selected/${_id}`}>
                <Button variant="primary">Details</Button>
              </Link>
            </Card.Body>
            <Card.Footer className="text-muted">Download</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseCard;
