import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import CourseList from "../pages/shared/CourseList/CourseList";
import Header from "../pages/shared/Header/Header";

const Main = () => {
  return (
    <Container>
      <Header></Header>
      <Row>
        <Col lg="3">
          <CourseList></CourseList>
        </Col>
        <Col lg="9">
          <Outlet></Outlet>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
