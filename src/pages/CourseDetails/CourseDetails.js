import React from "react";
import { useLoaderData } from "react-router-dom";
import { ReactToPdf } from "react-to-pdf";
import Pdf from "react-to-pdf";

import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  const ref = React.createRef();
  const course = useLoaderData();
  const { title, image_url, details } = course;
  console.log(course);

  return (
    <div className="mt-5">
      <Card className="w-50 mx-auto text-center">
        <Card.Header>
          <div className="App">
            <Pdf targetRef={ref} filename="code-example.pdf">
              {({ toPdf }) => (
                <button className="mb-2 btn-success" onClick={toPdf}>
                  Generate Pdf
                </button>
              )}
            </Pdf>
            <div ref={ref}>
              <Card.Img
                variant="top"
                style={{ height: "300px" }}
                src={course.image_url}
              />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.details}</Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card.Header>
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
