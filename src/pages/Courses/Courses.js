import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CourseList from "../shared/CourseList/CourseList";

const Courses = () => {
  return (
    <Container>
      <Row>
        <Col lg="3">
          <CourseList></CourseList>
        </Col>
        <Col lg="9">
          <h1>this is course details</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
