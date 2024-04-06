import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Booking from "../Pages/Booking/Booking";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Apps from "../Pages/Register/demo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/booking",
        element: <Booking></Booking>,
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
        path: "/s",
        element: <Apps></Apps>,
      },
    ],
  },
]);

export default router;
