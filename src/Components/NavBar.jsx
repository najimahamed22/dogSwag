import logo from "../assets/logo.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-base-100 border-b-2 border-black sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-5">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div className="inline-flex items-center gap-5">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-16 rounded-full  ml-2"
            />
          </Link>
          <h2 className="text-[#5F2600] font-bold text-2xl">DogSwag</h2>
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            className="text-gray-500    focus:outline-none text-2xl "
            aria-label="toggle menu"
            onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
      </div>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } sm:flex sm:items-center sm:w-auto`}>
        <div className="px-2 pt-2  text-lg font-semibold pb-2 sm:flex">
          <NavLink
            to="/"
            exact="true"
            className="block px-2 py-1 sm:mt-0 sm:ml-2">
            Home
          </NavLink>

          <NavLink
            to="/"
            exact="true"
            className="block px-2 text-gray-500 py-1 sm:mt-0 sm:ml-2">
            About us
          </NavLink>
          <NavLink
            to="/"
            exact="true"
            className="block px-2 py-1 text-gray-500 sm:mt-0 sm:ml-2">
            Contact us
          </NavLink>
        </div>
      </nav>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } sm:flex sm:items-center sm:w-auto`}>
        <div className="px-2 md:pt-2  text-lg font-semibold pb-2 sm:flex">
          <NavLink
            to="/"
            exact="true"
            className="block px-2 py-1  sm:mt-0 sm:ml-2">
            Login
          </NavLink>
          <NavLink
            to="/"
            exact="true"
            className="block btn-yellow px-2 py-1 sm:mt-0 sm:ml-2">
            Sign Up
          </NavLink>
        </div>
      </nav>
    </nav>
  );
};

export default NavBar;
