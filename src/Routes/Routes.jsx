import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement: <div className="text-5xl">Error</div>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);