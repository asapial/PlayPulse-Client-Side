import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import Playpulsenameplate from "../../Atoms/Playpulsenameplate";
import { AuthContext } from "../../main";

const NavBar = () => {
  const { user } = useContext(AuthContext);
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
              <ul className="p-2">
              {eventList}
              </ul>
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
              <ul className="p-2">
              {eventList}
              </ul>
            </details>
          </li>
          <li>
            <Link to={"/manageEvents"}>Manage Events</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-5 px-5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Theme
            <svg
              width="12px"
              height="12px"
              className="inline-block h-2 w-2 fill-current opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Dark"
                value="PlayPulseDark"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Light"
                value="PlayPulseLight"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Default"
                value="default"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Retro"
                value="retro"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Cyberpunk"
                value="cyberpunk"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Valentine"
                value="valentine"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Aqua"
                value="aqua"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Cupcake"
                value="cupcake"
              />
            </li>
          </ul>
        </div>
        <NavLink to={"/login"} className="btn btn-primary btn-soft rounded-2xl">
          Login
        </NavLink>
        <NavLink
          to={"/register"}
          className="btn btn-primary btn-soft rounded-2xl"
        >
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
