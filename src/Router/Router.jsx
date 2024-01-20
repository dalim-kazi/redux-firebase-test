import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Login from "../Pages/Login";
import SingUp from "../Pages/SingUp";

 export const router = createBrowserRouter([
    {
         path: "/",
         element: <Main />,
         children: [
             {
                 path: "/login",
                 element:<Login/>
             },
             {
                 path: "/signUp",
                 element:<SingUp/>
             }
        ]
    }
])