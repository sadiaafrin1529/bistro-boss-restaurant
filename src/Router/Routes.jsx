import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home/Home";
import Menu from "../Page/Menu/Menu";
import OrderFood from "../Page/OrderFood/OrderFood";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUP/SignUp";
import Secure from "../Page/Secure/Secure";
import PrivateRouter from "./PrivateRouter";
import LoadingComponent from "../Page/Home/Shared/Loading/Loading";
import Dashboard from "../LayOut/Dashboard";
import Cart from "../Page/Dashboard/Cart/Cart";
import AllUsers from "../Page/Dashboard/AllUsers/AllUsers";

 export const router = createBrowserRouter([
   {
     path: "/",
     element: <Main />,
     children: [
       {
         path: "/",
         element: <Home />,
       },
       {
         path: "menu",
         element: <Menu />,
       },
       {
         path: "order/:category",
         element: <OrderFood />,
       },
       {
         path: "login",
         element: <Login />,
       },
       {
         path: "signup",
         element: <SignUp />,
       },

       {
         path: "secure",
         element: (
           <PrivateRouter>
             <Secure />
           </PrivateRouter>
         ),
       },
     ],
   },
   {
     path: "dashboard",
     element: (
       <PrivateRouter>
         <Dashboard />
       </PrivateRouter>
     ),
     children: [
       {
         path: "cart",
         element: <Cart />,
       },
       {
         path: "users",
         element: <AllUsers />,
       },
     ],
   },
 ]);