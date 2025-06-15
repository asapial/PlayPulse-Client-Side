import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import Playpulsenameplate from "../../Atoms/Playpulsenameplate";
import { AuthContext } from "../../main";
import { FaMoon, FaSun } from "react-icons/fa";
import { ErrorToast, SuccessToast } from "../../Utilities/ToastMaker";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownItem,
} from "flowbite-react";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(true);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        SuccessToast(
          "Logged Out of PlayPulse! Stay active, come back stronger! 💪"
        );
      })
      .catch((error) => {
        ErrorToast(
          `⚠️ Oops! Something tripped — ${error.message}. Let's get back in the game! 🏃‍♂️💨`
        );
      });
  };

  const linkList = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/eventType"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Events Page
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/createEvent"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Create Event
        </NavLink>
      </li>
      {!user ? (
        <>
          <li className="block sm:hidden">
            <Link to="/login" className="btn btn-primary btn-soft rounded-2xl">
              Login
            </Link>
          </li>
          <li className="block sm:hidden">
            <Link
              to="/register"
              className="btn btn-primary btn-soft rounded-2xl"
            >
              Register
            </Link>
          </li>
        </>
      ) : (
        <li className="block sm:hidden">
          <button
            onClick={handleLogOut}
            className="btn btn-primary btn-soft rounded-2xl"
          >
            LogOut
          </button>
        </li>
      )}
    </>
  );

  const toggleTheme = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");
    html.setAttribute(
      "data-theme",
      currentTheme === "PlayPulseLight" ? "PlayPulseDark" : "PlayPulseLight"
    );
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-5">
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow  text-lg font-semibold"
          >
            {linkList}
          </ul>
        </div>
        <Link to={"/"} className="text-3xl text-blue-400 font-bold">
          <Playpulsenameplate></Playpulsenameplate>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex text-lg font-semibold">
        <ul className="menu menu-horizontal px-1">{linkList}</ul>
      </div>
      <div className="navbar-end flex gap-5 px-5">
        <button
          onClick={() => {
            setTheme(!theme);
            toggleTheme();
          }}
        >
          {theme ? <FaSun size={30}></FaSun> : <FaMoon size={30}></FaMoon>}
        </button>

        <div className="hidden lg:block">
          {!user ? (
            <>
              <Link
                to={"/login"}
                className="btn btn-primary btn-soft rounded-2xl"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="btn btn-primary btn-soft rounded-2xl"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogOut}
              className="btn btn-primary btn-soft rounded-2xl"
            >
              LogOut
            </button>
          )}
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="">
            <div className="">
              {user ? (
                user.photoURL ? (
                  <Avatar
                    img={user.photoURL}
                    rounded
                    bordered
                    color="success"
                    className=" w-15 h-15"
                  />
                ) : (
                  <Avatar rounded />
                )
              ) : (
                <Avatar rounded />
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52  shadow-sm"
          >
            <li>
              <Link
                to="/bookedEvents"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Book Events
              </Link>
            </li>
            <li>
              <Link
                to="/manageEvents"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Manage Events
              </Link>
            </li>
            <li>
              <Link
                to="/myBookings"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                My Bookings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
