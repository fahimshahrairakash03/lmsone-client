import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import CourseSummary from "../CourseSummary/CourseSummary";
import CourseList from "../shared/CourseList/CourseList";

const Courses = () => {
  const allcourse = useLoaderData();
  return (
    <div className="mt-5">
      <h1 className="text-center my-5 fw-bold">All Of Our Courses</h1>

      <div>
        {allcourse.map((course) => (
          <CourseSummary key={course._id} course={course}></CourseSummary>
        ))}
      </div>
    </div>
  );
};

export default Courses;
