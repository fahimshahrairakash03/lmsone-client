import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://lmsone-server.vercel.app/course-list")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <h1>Courses: {courses.length}</h1>
      {courses.map((course) => (
        <p key={course.id} course={course}>
          <Link to={`/course/${course.id}`}>{course.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default CourseList;
