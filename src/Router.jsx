import { createBrowserRouter } from "react-router-dom";
import Root from "./Comp/Root";
// import HomeLayout from "./Comp/HomeLayout";
import Login from "./Comp/Login";
import Drawer from "./Comp/Drawer";
import ListUsers from "./Comp/ListUsers";
import CreateEvent from "./Comp/CreateEvent";
import Private from "./Comp/Private";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Private><Drawer></Drawer></Private>,
    // errorElement:<Error></Error>,
    children: [
      //   {
      //     path: "/",
      //     element: <HomeLayout></HomeLayout>,

      //   },
      {
        path: "/test",
        element: <ListUsers></ListUsers>,
      },
      {
        path: "/createEvent",
        element: <CreateEvent></CreateEvent>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default Router;
