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
import ManagerRoute from "./ManagerRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <ManagerRoute><Products></Products></ManagerRoute>
      },
      {
        path: 'addProduct',
        element: <ManagerRoute><AddProduct></AddProduct></ManagerRoute>
      },
      {
        path: 'updateProduct/:id',
        element: <ManagerRoute><UpdateProduct></UpdateProduct></ManagerRoute>,
        loader: ({params}) => fetch(`https://inventory-management-system-server-livid.vercel.app/${params.id}`)

      },
      {
        path:'salesCollection',
        element:<ManagerRoute><SalesCollection></SalesCollection></ManagerRoute>
      },
      {
        path:'checkout',
        element:<ManagerRoute><Checkout></Checkout></ManagerRoute>
      },
      {
        path: 'subscription',
        element: <ManagerRoute><Subscription></Subscription></ManagerRoute>
      },
      {
        path: 'salesSummery',
        element:<ManagerRoute><SalesSummery></SalesSummery></ManagerRoute>
      },
      {
        path:'payment/:amount',
        element:<ManagerRoute><Payment></Payment></ManagerRoute>
      },
      

      // admin routes
      {
        path:'manageShop',
        element:<AdminRoute><ManageShop></ManageShop></AdminRoute>
      },
      {
        path:'adminSummary',
        element:<AdminRoute><AdminSummery></AdminSummery></AdminRoute>
      }
    ]
  }
]);