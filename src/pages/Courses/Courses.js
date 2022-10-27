import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import CourseIntro from "../shared/CourseIntro/CourseIntro";
import CourseList from "../shared/CourseList/CourseList";

import Card from "react-bootstrap/Card";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
  // const all = useLoaderData();

  // const { _id, title, image_url, details } = all;

  // console.log(all);
  return (
    <Container>
      <Row>
        <Col lg="3">
          <CourseList></CourseList>
        </Col>
        <Col lg="9">
          <div>
            {/* <CourseCard></CourseCard> */}
            {/* <h2>Total Courses: {all.length}</h2> */}
            {/* {all.map((course) => (
              <p key={course._id} course={course}>
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
                      <Button variant="primary">Go somewhere</Button>
                    </Link>
                  </Card.Body>
                  <Card.Footer className="text-muted">Download</Card.Footer>
                </Card>
              </p>
            ))} */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
