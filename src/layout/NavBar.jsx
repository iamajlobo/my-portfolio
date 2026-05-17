import heart from "../assets/images/heart.png";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        `transition-all duration-300 hover:text-violet-400 ${
            isActive
                ? "text-violet-400 font-semibold"
                : "text-white/80"
        }`;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    
    return (
        <header className="fixed top-0 left-0 w-full z-50 px-5">
            <nav className="
                max-w-7xl mx-auto
                px-6 md:px-10
                py-4
                flex items-center justify-between
                backdrop-blur-md
                bg-black/20
                border border-white/10
                rounded-2xl
                mt-4
            ">
                
                {/* Logo / Hearts */}
                <div className="flex items-center gap-1">
                    <img className="w-7 md:w-8 animate-pulse" src={heart} alt="Heart" />
                    <img className="w-7 md:w-8 animate-pulse delay-100" src={heart} alt="Heart" />
                    <img className="w-7 md:w-8 animate-pulse delay-200" src={heart} alt="Heart" />
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-12 text-lg">
                    <NavLink onClick={scrollToTop} className={linkClass} to="/">
                        Home
                    </NavLink>

                    <NavLink onClick={scrollToTop} className={linkClass} to="/about">
                        About
                    </NavLink>

                    <NavLink onClick={scrollToTop} className={linkClass} to="/projects">
                        Projects
                    </NavLink>
                </div>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <NavLink
                        className="
                            bg-violet-600
                            hover:bg-violet-500
                            text-white
                            px-5 py-2.5
                            rounded-xl
                            text-sm
                            font-medium
                            transition-all duration-300
                            shadow-lg shadow-violet-900/30
                            hover:scale-105
                        "
                        to="#"
                    >
                        Download CV
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="
                    md:hidden
                    mx-6 mt-2
                    rounded-2xl
                    bg-black/80
                    backdrop-blur-xl
                    border border-white/10
                    p-6
                    flex flex-col gap-6
                    text-center
                ">
                    <NavLink
                        onClick={() => setIsOpen(false)}
                        className={linkClass}
                        to="/"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        onClick={() => setIsOpen(false)}
                        className={linkClass}
                        to="/about"
                    >
                        About
                    </NavLink>

                    <NavLink
                        onClick={() => setIsOpen(false)}
                        className={linkClass}
                        to="/projects"
                    >
                        Projects
                    </NavLink>

                    <NavLink
                        className="
                            bg-violet-600
                            hover:bg-violet-500
                            text-white
                            py-3
                            rounded-xl
                            text-sm
                            font-medium
                            transition-all
                        "
                        to="#"
                    >
                        Download CV
                    </NavLink>
                </div>
            )}
        </header>
    );
};

export default NavBar;