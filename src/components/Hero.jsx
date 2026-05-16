import { NavLink } from "react-router-dom";
import hero from "../assets/images/hero.png";
import { useEffect, useRef, useState } from "react";

import blue from "../assets/images/blue.png";

const BALL_SIZE = 80;

const Hero = () => {
  const containerRef = useRef(null);

  const [position, setPosition] = useState({
    x: 100,
    y: 100,
  });

  const velocity = useRef({
    vx: 3,
    vy: 2,
  });

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        let newX = prev.x + velocity.current.vx;
        let newY = prev.y + velocity.current.vy;

        const containerWidth =
          containerRef.current?.offsetWidth || window.innerWidth;

        const containerHeight =
          containerRef.current?.offsetHeight || window.innerHeight;

        // RIGHT WALL
        if (newX + BALL_SIZE >= containerWidth) {
          newX = containerWidth - BALL_SIZE;
          velocity.current.vx *= -1;
        }

        // LEFT WALL
        if (newX <= 0) {
          newX = 0;
          velocity.current.vx *= -1;
        }

        // BOTTOM WALL
        if (newY + BALL_SIZE >= containerHeight) {
          newY = containerHeight - BALL_SIZE;
          velocity.current.vy *= -1;
        }

        // TOP WALL
        if (newY <= 0) {
          newY = 0;
          velocity.current.vy *= -1;
        }

        return {
          x: newX,
          y: newY,
        };
      });
    };

    const interval = setInterval(animate, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-hero bg-center bg-cover relative overflow-hidden"
    >
      <div className="absolute inset-0 z-20 pointer-events-none">
        <img
          src={blue}
          alt="Blue Entity"
          className="h-20 w-20 absolute select-none pointer-events-none"
          style={{
            top: position.y,
            left: position.x,
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-5 py-10 grid md:grid-cols-2 items-center relative z-10">
        <div className="order-2 md:order-1">
          <h3 className="text-md md:text-2xl text-gray-300">Hello, I'm</h3>

          <h1 className="text-6xl md:text-8xl leading-20 md:leading-28 font-semibold mb-3">
            <span className="text-cyan-400">Aj</span> Lobo
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300">
            Computer Science Student
          </h2>

          <p className="py-3 text-sm md:text-md text-gray-100/70 mb-3">
            Passionate about building innovative solutions and turning ideas
            into real-world applications.
          </p>

          <div className="flex gap-3">
            <NavLink
              to="/resume"
              className="bg-cyan-400 text-sm md:text-base border border-cyan-400 hover:bg-transparent hover:border-gray-500 inline-block w-30 md:w-40 text-center py-2 rounded hover:opacity-80 transition"
            >
              View My Works
            </NavLink>

            <NavLink
              to="/resume"
              className="bg-transparent text-sm md:text-base border border-gray-500 hover:bg-cyan-400 hover:border-cyan-400 inline-block w-30 md:w-40 text-center py-2 rounded transition"
            >
              Contact Me
            </NavLink>
          </div>
        </div>

        <div className="mb-10 md:mb-0 flex justify-center md:justify-end order-1 md:order-2 z-0">
          <img
            className="shadow-2xl w-full md:h-auto md:w-100"
            src={hero}
            alt="My Photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
