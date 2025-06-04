import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: Root,
    children:[
        {
            index:true,
            Component: Home
        },
        {
            
        }
    ]
  },
]);