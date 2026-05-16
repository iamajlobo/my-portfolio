import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "border-b-2 border-cyan-400 pb-3 md:pb-1 text-cyan-400"
      : "hover:text-cyan-400 transition";

  return (
    <section className="bg-main text-white shadow-xs shadow-cyan-400/30 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto p-5 flex justify-between items-center ">
        <h1>
          <NavLink to="/">
            <img className="w-10" src={logo} alt="logo" />
          </NavLink>
        </h1>

        <div className="hidden font-medium md:flex gap-15">
          <NavLink className={linkClass} to="/">
            Home
          </NavLink>
          <NavLink className={linkClass} to="/about">
            About
          </NavLink>
          <NavLink className={linkClass} to="/projects">
            Projects
          </NavLink>
        </div>

        <NavLink
          to="/resume"
          className="hidden md:block bg-cyan-400 px-4 py-2 rounded hover:opacity-80 transition"
        >
          Download CV
        </NavLink>
        <img
          className="inline-block md:hidden w-10"
          onClick={() => setIsOpen(true)}
          src={menu}
          alt="Menu Icon"
        />
      </nav>

      <div
        className={`
    fixed top-0 right-0
    w-80 h-screen
    bg-main
    py-20 px-10
    font-medium text-center
    border-l border-gray-200/30
    flex flex-col gap-5

    transition-all duration-300 ease-in-out

    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <NavLink className={linkClass} to="/">
          Home
        </NavLink>
        <NavLink className={linkClass} to="/about">
          About
        </NavLink>
        <NavLink className={linkClass} to="/projects">
          Projects
        </NavLink>
        <NavLink
          to="/resume"
          className="inline-block md:hidden text-sm bg-cyan-400 px-4 py-2 rounded hover:opacity-80 transition"
        >
          Download CV
        </NavLink>
        <img
          className="w-5 absolute top-4 left-5 opacity-50"
          onClick={() => setIsOpen(false)}
          src={close}
          alt="Close Icon"
        />
      </div>
    </section>
  );
};

export default NavBar;
