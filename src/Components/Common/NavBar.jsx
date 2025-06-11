import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import Playpulsenameplate from "../../Atoms/Playpulsenameplate";
import { AuthContext } from "../../main";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const eventTypes = [
    "Swimming",
    "Sprinting",
    "Long Jump",
    "High Jump",
    "Hurdle race",
    "Water-Polo",
    "Fencing",
    "Volley-Ball",
    "Badminton",
    "Others",
    "All",
  ];

  const eventList = (
    <>
      {eventTypes.map((event) => (
        <li>
          <Link to={`/showEventData/${event}`}>{event}</Link>
        </li>
      ))}
    </>
  );

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        toast.success(
          "Logged Out of PlayPulse! Stay active, come back stronger! 💪",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      })
      .catch((error) => {
        toast.success(
          `⚠️ Oops! Something tripped — ${error.message}. Let's get back in the game! 🏃‍♂️💨`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      });
  };

  const toggleTheme = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");
    html.setAttribute(
      "data-theme",
      currentTheme === "PlayPulseLight" ? "PlayPulseDark" : "PlayPulseLight"
    );
  };

  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="navbar-start">
        <div className="mask mask-squircle h-12 w-12">
          <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
        </div>

        {/* dropdown for theme  */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/registerSeeker"}>Add Profile</Link>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">{eventList}</ul>
            </li>
            <li>
              <Link to={"/manageEvents"}>Manage Events</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="text-3xl text-blue-400 font-bold">
          <Playpulsenameplate></Playpulsenameplate>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/createEvent"}>Create Event</Link>
          </li>
          <li>
            <details>
              <summary>Event List</summary>
              <ul className="p-2">{eventList}</ul>
            </details>
          </li>
          <li>
            <Link to={"/manageEvents"}>Manage Events</Link>
          </li>
          <li>
            <Link to={"/myBookings"}>My Bookings</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-5 px-5">
        {!user ? (
          <>
            <NavLink
              to={"/login"}
              className="btn btn-primary btn-soft rounded-2xl"
            >
              Login
            </NavLink>
            <NavLink
              to={"/register"}
              className="btn btn-primary btn-soft rounded-2xl"
            >
              Register
            </NavLink>
          </>
        ) : (
          <button
            onClick={handleLogOut}
            className="btn btn-primary btn-soft rounded-2xl"
          >
            LogOut
          </button>
        )}

        <button
          onClick={toggleTheme}
          className="btn btn-primary "
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default NavBar;
