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
import Error from "../Pages/Others/Error";
import ProtectedRoute from "./ProtectedRoute";
import ShowEventData from "../Pages/Event Management/ShowEventData";
import updateProfile from "../Pages/Authentication/UpdateProfile";
import EventsPage from "../Pages/Event Management/EventsPage";
import Copyright from "../Pages/Footer.jsx/Copyright";
import ContactInformation from "../Pages/Footer.jsx/ContactInformation";
import BookedEvent from "../Pages/Event Management/BookedEvent";
import UpdateProfile from "../Pages/Authentication/UpdateProfile";
import ResetLink from "../Pages/Authentication/ResetLink";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "forgetPassword",
        Component: ResetLink,
      },
      {
        path: "updateUserProfile",
                element: (
          <ProtectedRoute>
            <UpdateProfile></UpdateProfile>
          </ProtectedRoute>
        ),
      },
      {
        path: "createEvent",
        element: (
          <ProtectedRoute>
            <CreateEvent></CreateEvent>
          </ProtectedRoute>
        ),
      },
      {
        path: "/events/:id",
        element: (
          <ProtectedRoute>
            <EventDetails></EventDetails>
          </ProtectedRoute>
        ),
      },
      {
        path: "myBookings",
        element: (
          <ProtectedRoute>
            <MyBookings></MyBookings>
          </ProtectedRoute>
        ),
      },
      {
        path: "bookedEvents",
        element: (
          <ProtectedRoute>
            <BookedEvent></BookedEvent>
          </ProtectedRoute>
        ),
      },
      {
        path: "updateEvent/:id",
        element: (
          <ProtectedRoute>
            <UpdateEvent></UpdateEvent>
          </ProtectedRoute>
        ),
      },
      {
        path: "manageEvents",
        element: (
          <ProtectedRoute>
            <ManageEventsPage></ManageEventsPage>
          </ProtectedRoute>
        ),
      },
      {
        path: "showEventData/:event",
        Component: ShowEventData,
      },
      {
        path: "eventType",
        Component: EventsPage,
      },
      {
        path: "copyRight",
        Component: Copyright,
      },
      {
        path: "contactInformation",
        Component: ContactInformation,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
