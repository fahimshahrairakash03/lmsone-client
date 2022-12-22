import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Premium from "../../pages/Premium/Premium";
import Register from "../../pages/Register/Register";
import CourseIntro from "../../pages/shared/CourseIntro/CourseIntro";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://lmsone-server.vercel.app/allcourse"),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://lmsone-server.vercel.app/allcourse"),
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/course/:id",
        element: <CourseIntro></CourseIntro>,
        loader: ({ params }) =>
          fetch(`https://lmsone-server.vercel.app/course/${params.id}`),
      },
      {
        path: "/selected/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`https://lmsone-server.vercel.app/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/premium",
        element: (
          <PrivateRoute>
            <Premium></Premium>
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "*", element: <div>404, This route not found</div> },
]);
