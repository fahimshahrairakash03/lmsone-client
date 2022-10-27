import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseSummary from "../CourseSummary/CourseSummary";

const Home = () => {
  const allcourse = useLoaderData();
  console.log(allcourse);
  return (
    <div>
      <h1 className="text-center">Explore The Courses</h1>

      <div>
        {allcourse.map((course) => (
          <CourseSummary key={course._id} course={course}></CourseSummary>
        ))}
      </div>
    </div>
  );
};

export default Home;
