import { NavLink } from "react-router-dom";
import coin from "../assets/images/coin.png";

const Hero = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <section className="min-h-screen hero-bg flex items-center justify-center px-6 py-12">
            <div className="text-center flex flex-col items-center gap-5 max-w-4xl">
                
                {/* Player Tag */}
                <div className="px-4 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                    <h3 className="text-sm sm:text-base md:text-lg tracking-[0.3em] text-gray-300">
                        PLAYER 1
                    </h3>
                </div>

                {/* Main Heading */}
                <h1 className="
                    text-5xl
                    sm:text-6xl
                    md:text-7xl
                    lg:text-8xl
                    font-extrabold
                    uppercase
                    tracking-tight
                    leading-none
                    text-white
                    drop-shadow-[0_5px_25px_rgba(0,0,0,0.6)]
                ">
                    ALEXANDER
                </h1>

                {/* Subtitle */}
                <div className="
                    flex flex-wrap items-center justify-center
                    gap-3 sm:gap-4
                    text-sm sm:text-lg md:text-xl
                    font-medium
                    text-gray-200
                    tracking-[0.2em]
                ">
                    <div className="flex items-center gap-3">
                        <span>CODE</span>
                        <img
                            className="w-4 sm:w-5 md:w-6 animate-spin-slow"
                            src={coin}
                            alt="coin"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <span>CREATE</span>
                        <img
                            className="w-4 sm:w-5 md:w-6 animate-spin-slow"
                            src={coin}
                            alt="coin"
                        />
                    </div>

                    <span>CONQUER</span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <NavLink onClick={scrollToTop} to="/about" className="
                        px-8 py-3
                        rounded-xl
                        bg-yellow-400
                        text-black
                        font-semibold
                        hover:scale-105
                        hover:bg-yellow-300
                        hover:cursor-pointer
                        transition-all duration-300
                        shadow-lg
                    ">
                        Who am I?
                    </NavLink>

                    <NavLink onClick={scrollToTop} to="/projects" className="
                        px-8 py-3
                        rounded-xl
                        border border-white/20
                        bg-white/10
                        backdrop-blur-md
                        text-white
                        font-semibold
                        hover:bg-white/20
                        hover:cursor-pointer
                        transition-all duration-300
                    ">
                        View Projects
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default Hero;