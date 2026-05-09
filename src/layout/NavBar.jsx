import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const NavBar = () => {

  const linkClass = ({ isActive }) =>
    isActive
      ? "border-b-2 border-cyan-400 pb-1 text-cyan-400"
      : "hover:text-cyan-400 transition";

  return (
    <section className="bg-main text-white shadow-lg sticky top-0">
      <nav className="max-w-6xl mx-auto p-5 flex justify-between items-center">
        <h1>
          <NavLink to="/">
            <img className="w-10" src={logo} alt="logo" />
          </NavLink>
        </h1>

        <div className="font-medium flex gap-20">
          <NavLink className={linkClass} to="/">Home</NavLink>
          <NavLink className={linkClass} to="/about">About</NavLink>
          <NavLink className={linkClass} to="/projects">Projects</NavLink>
        </div>

        <NavLink
          to="/resume"
          className="bg-cyan-400 px-4 py-2 rounded hover:opacity-80 transition"
        >
          Download CV
        </NavLink>
      </nav>
    </section>
  );
};

export default NavBar;