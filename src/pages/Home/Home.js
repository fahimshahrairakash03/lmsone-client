import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseSummary from "../CourseSummary/CourseSummary";

const Home = () => {
  const allcourse = useLoaderData();
  console.log(allcourse);
  return (
    <div className="mt-5">
      <h1 className="text-center my-5 fw-bold">Explore The Courses</h1>

      <div>
        {allcourse.map((course) => (
          <CourseSummary key={course._id} course={course}></CourseSummary>
        ))}
      </div>
    </div>
  );
};

export default Home;
