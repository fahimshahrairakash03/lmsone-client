import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://lmsone-server.vercel.app/course-list")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <h1 className="fw-bold text-center my-4">Courses: {courses.length}</h1>
      {courses.map((course) => (
        <p key={course.id} course={course}>
          <Link to={`/course/${course.id}`}>
            <Button
              style={{ width: "180px" }}
              className="fw-semibold"
              variant="success"
            >
              {course.name}
            </Button>{" "}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default CourseList;
