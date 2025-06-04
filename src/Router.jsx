import { createBrowserRouter } from "react-router-dom";
import Root from "./Comp/Root";
// import HomeLayout from "./Comp/HomeLayout";
import Login from "./Comp/Login";
import Drawer from "./Comp/Drawer";
import Test from "./Comp/Test";

const Router = createBrowserRouter([

  {
    path: "/",
    element: <Drawer></Drawer>,
    // errorElement:<Error></Error>,
    children: [
    //   {
    //     path: "/",
    //     element: <HomeLayout></HomeLayout>,
    
    //   },
      {
        path: "/test",
        element: <Test></Test>,
    
      },
      
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
 
  },
]);

export default Router;