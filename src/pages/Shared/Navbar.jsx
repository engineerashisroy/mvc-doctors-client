import React from "react";
import site_logo from "../../assets/images/site_logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        {user ? (
          <>
            <Link onClick={logout}>Log Out</Link>
          </>
        ) : (
          <>
            <Link to="/login">Log In</Link>
          </>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar container fixed z-10 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              {menuItem}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl p-0 m-0">
            <div className="flex items-center justify-center">
              <img src={site_logo} alt="site logo" className="w-10" />
              <p className="italic text-3xl">Sintheya Clinic</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex bg-base-100">
          <ul className="menu menu-horizontal px-1 md:text-2xl ">
            {/* destop menu  */}
            {menuItem}
          </ul>
        </div>
        <div className="navbar-end md:hidden sm:flex">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
            tabIndex={0}
            role="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
