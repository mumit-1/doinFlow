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
import Analytics from "./Comp/Analytics";
import View from "./Comp/View";
import { useContext } from "react";
import { AuthProvider } from "./Comp/Provider";

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
      {
        path: "/events/:_id",
  element: <View></View>,

      },
      {
        path: "/analytics",
        element: <Analytics></Analytics>,

      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default Router;
