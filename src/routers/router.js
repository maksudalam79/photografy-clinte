import { createBrowserRouter } from "react-router-dom";
import Addservice from "../allservice/Addservice";
import Allservice from "../allservice/Allservice";
import Found from "../banner/Found";
import Blog from "../blog/Blog";
import Deatails from "../details/Deatails";
import Home from "../home/Home";
import Login from "../login/Login";
import Main from "../main/Main";
import Registration from "../registration/Registration";
import Allreview from "../review/Allreview";
import Edit from "../review/Edit";
import Myreview from "../review/Myreview";
import Private from "./Private";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allservice",
        element: <Allservice></Allservice>,
      },
      {
        path: "/allservice/:id",
        element: (
          <Private>
            <Deatails></Deatails>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assigment-11-server-site.vercel.app/allservice/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/review",
        element: <Myreview></Myreview>,
      },
      {
        path: "/reviews/:id",
        element: <Edit></Edit>,
        loader: ({ params }) =>
          fetch(
            `https://assigment-11-server-site.vercel.app/reviews/${params.id}`
          ),
      },
      {
        path: "/reviews",
        element: <Allreview></Allreview>,
        loader: () =>
          fetch("https://assigment-11-server-site.vercel.app/reviews"),
      },
      {
        path: "/addservice",
        element: <Addservice></Addservice>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "*",
        element: <Found></Found>,
      },
    ],
  },
]);
