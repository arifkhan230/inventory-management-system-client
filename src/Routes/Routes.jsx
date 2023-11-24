import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "../pages/Home/Home/Home";
import CreateShop from "../pages/CreateShop/CreateShop";
import WatchDemo from "../pages/WatchDemo/WatchDemo";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement: <div className="text-5xl">Error</div>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            // Todo: make this private route
            path:'createShop',
            element:<CreateShop></CreateShop>
        },
        {
            path: 'watchDemo',
            element:<WatchDemo></WatchDemo>
        },
        {
            path:'register',
            element: <Register></Register>
        },
        {
            path:'login',
            element: <Login></Login>
        }
      ]
    },
  ]);