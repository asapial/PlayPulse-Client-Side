import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import CreateEvent from "../Pages/Event Management/CreateEvent";
import EventDetails from "../Pages/Event Management/EventDetails";
import MyBookings from "../Pages/Event Management/MyBookings";
import ManageEventsPage from "../Pages/Event Management/ManageEventsPage";
import UpdateEvent from "../Pages/Event Management/UpdateEvent";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index:true,
            Component: Home
        },
        {
            path:'login',
            Component:Login
        },
        {
          path:'register',
          Component:Register
        },
        {
          path:'createEvent',
          Component:CreateEvent
        },
        {
          path:'/events/:id',
          Component:EventDetails
        },
        {
          path:'myBookings',
          Component:MyBookings
        },
        {
          path:'updateEvent/:id',
          Component:UpdateEvent
        },
        {
          path:'manageEvents',
          Component:ManageEventsPage
        }

    ]
  },
]);