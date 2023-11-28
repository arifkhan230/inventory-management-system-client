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
import SalesCollection from "../pages/Dashboard/SalesCollection/SalesCollection";
import Checkout from "../pages/Dashboard/Checkout/Checkout";
import SalesSummery from "../pages/Dashboard/SalesSummery/SalesSummery";
import Payment from "../pages/Dashboard/Payment/Payment";
import ManageShop from "../pages/Dashboard/ManageShop/ManageShop";
import AdminSummery from "../pages/Dashboard/AdminSummery/AdminSummery";
import Forbidden from "../pages/Forbidden/Forbidden";
import AdminRoute from "./AdminRoute";

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
      },
      {
        path:'forbidden',
        element:<Forbidden></Forbidden>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'manageProducts',
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
        path:'salesCollection',
        element:<SalesCollection></SalesCollection>
      },
      {
        path:'checkout',
        element:<Checkout></Checkout>
      },
      {
        path: 'subscription',
        element: <Subscription></Subscription>
      },
      {
        path: 'salesSummery',
        element:<SalesSummery></SalesSummery>
      },
      {
        path:'payment/:amount',
        element:<Payment></Payment>
      },
      

      // admin routes
      {
        path:'manageShop',
        element:<AdminRoute><ManageShop></ManageShop></AdminRoute>
      },
      {
        path:'adminSummary',
        element:<AdminSummery></AdminSummery>
      }
    ]
  }
]);