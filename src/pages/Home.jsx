import { NavLink } from "react-router-dom";
import hero from "../assets/images/hero.png";

const Home = () => {
  return (
    <section className="text-white">
      {/**
       * Hero Section
       */}
      <div className="bg-hero bg-center bg-cover ">
        <div className="max-w-5xl mx-auto px-5 py-10 grid grid-cols-2 h-full items-center">
          <div>
            <h3 className="text-2xl text-gray-300">Hi, I'm</h3>
            <h1 className="text-8xl leading-28 font-semibold mb-3">
              <span className="text-cyan-400">Aj</span> Lobo
            </h1>
            <h2 className="text-2xl text-gray-300">
              I build clean web experience and intelligent solutions
            </h2>
            <p className="py-3 text-md text-gray-100/70 mb-3">
              I'm a Computer Science student who loves turning ideas into
              responsive websites and building smart models with Python and
              Machine Learning.
            </p>
            <div className="flex gap-3">
              <NavLink
                to="/resume"
                className="bg-cyan-400 border border-cyan-400 inline-block w-40 text-center py-2 rounded hover:opacity-80 transition"
              >
                View My Works
              </NavLink>
              <NavLink
                to="/resume"
                className="bg-transparent border border-gray-500 inline-block w-40 text-center py-2 rounded hover:opacity-80 transition"
              >
                Contact Me
              </NavLink>
            </div>
          </div>
          <div className="flex justify-end">
            <img className="shadow-2xl w-100" src={hero} alt="My Photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
