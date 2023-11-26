import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import CreateShop from "../pages/CreateShop/CreateShop";
import WatchDemo from "../pages/WatchDemo/WatchDemo";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Products from "../pages/Dashboard/Products/Products";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import Subscription from "../pages/Dashboard/Subscription/Subscription";
import UpdateProduct from "../pages/Dashboard/UpdateProduct/UpdateProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div className="text-5xl">Error</div>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        // Todo: make this private route
        path: 'createShop',
        element: <PrivateRoute><CreateShop></CreateShop></PrivateRoute>
      },
      {
        path: 'watchDemo',
        element: <WatchDemo></WatchDemo>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'login',
        element: <Login></Login>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'products',
        element: <Products></Products>
      },
      {
        path: 'addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: 'updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params}) => fetch(`http://localhost:5000/singleProduct/${params.id}`)

      },

      {
        path: 'subscription',
        element: <Subscription></Subscription>
      }
    ]
  }
]);