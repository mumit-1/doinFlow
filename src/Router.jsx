import { createBrowserRouter } from "react-router-dom";
import Root from "./Comp/Root";
// import HomeLayout from "./Comp/HomeLayout";
import Login from "./Comp/Login";
import Drawer from "./Comp/Drawer";
import ListUsers from "./Comp/ListUsers";
import CreateEvent from "./Comp/CreateEvent";
import Private from "./Comp/Private";
import Test from "./Comp/Test";
import ListEvents from "./Comp/ListEvents";
import Welcome from "./Comp/Welcome";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Private><Drawer></Drawer></Private>,
    // errorElement:<Error></Error>,
    children: [
        {
          path: "/",
          element: <Welcome></Welcome>,

        },
      {
        path: "/users",
        element: <ListUsers></ListUsers>,
      },
      {
        path: "/createEvent",
        element: <CreateEvent></CreateEvent>,
      },
      {
        path: "/test",
        element: <Test></Test>,

      },
      {
        path: "/events",
        element: <ListEvents></ListEvents>,

      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default Router;
