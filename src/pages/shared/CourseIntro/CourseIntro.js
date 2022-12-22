import React from "react";
import { Col, Container } from "react-bootstrap";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import CourseCard from "../../CourseCard/CourseCard";
import CourseList from "../CourseList/CourseList";

const CourseIntro = () => {
  const allcourse = useLoaderData();
  console.log(allcourse);
  return (
    <div className="my-5">
      {allcourse.map((course) => (
        <CourseCard key={course._id} course={course}></CourseCard>
      ))}
    </div>
  );
};

export default CourseIntro;
