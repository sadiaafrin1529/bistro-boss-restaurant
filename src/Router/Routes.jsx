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

 export const router = createBrowserRouter([
  {
    path: "/",
         element: <Main />,
         children: [
             {
                 path: "/",
                 element:<Home/>
           },
           {
             path: 'menu',
             element:<Menu/>
           },
           {
             path: 'order/:category',
             element:<OrderFood/>
           },
           {
             path: 'login',
             element:<Login/>
           },
           {
             path: 'signup',
             element:<SignUp/>
           },
          
           {
             path: 'secure',
             element:<PrivateRouter><Secure/></PrivateRouter>
           }
    ]
  },
]);