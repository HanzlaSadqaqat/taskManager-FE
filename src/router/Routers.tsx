import Task from "../pages/Task";
import Login from "../pages/Login";
import { Signup } from "../pages/Signup";
import AllTask from "../pages/AllTask";
import { Navigate } from "react-router-dom";

export const router = (isLoggedIn: boolean) => {
  if (!isLoggedIn) {
    return [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },

      // for only testing purpose i add both public and private routes in a same bundle
      { path: "/dashboard", element: <Task /> },
      { path: "/task", element: <AllTask /> },
      { path: "*", element: <Navigate to={"/dashboard"} /> },
    ];
  } else {
    return [
      { path: "/", element: <Task /> },
      { path: "/task", element: <AllTask /> },
      { path: "*", element: <Navigate to={"/"} /> },
    ];
  }
};
