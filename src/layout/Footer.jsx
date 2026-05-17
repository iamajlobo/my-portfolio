import { ArrowUp } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="bg-[#050816] border-t border-white/10 text-white">

            {/* Main Footer */}
            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-6
                    py-16
                    grid
                    md:grid-cols-3
                    gap-12
                "
            >

                {/* Left */}
                <div className="space-y-5">
                    <h1
                        className="
                            text-4xl
                            font-extrabold
                            text-violet-500
                            tracking-tight
                        "
                    >
                        AJ
                    </h1>

                    <p
                        className="
                            text-gray-400
                            leading-relaxed
                            max-w-sm
                        "
                    >
                        Crafting modern and interactive digital
                        experiences with clean code, creative
                        design, and immersive user interfaces.
                    </p>
                </div>

                {/* Middle */}
                <div>
                    <h2
                        className="
                            text-xl
                            font-semibold
                            mb-5
                        "
                    >
                        Navigation
                    </h2>

                    <div
                        className="
                            flex
                            flex-col
                            gap-4
                            text-gray-400
                        "
                    >
                        <NavLink
                            onClick={scrollToTop}
                            to="/"
                            className="
                                hover:text-violet-400
                                transition-colors
                            "
                        >
                            Home
                        </NavLink>

                        <NavLink
                            onClick={scrollToTop}
                            to="/about"
                            className="
                                hover:text-violet-400
                                transition-colors
                            "
                        >
                            About
                        </NavLink>

                        <NavLink
                            onClick={scrollToTop}
                            to="/projects"
                            className="
                                hover:text-violet-400
                                transition-colors
                            "
                        >
                            Projects
                        </NavLink>

                    </div>
                </div>

                {/* Right */}
                <div>
                    <h2
                        className="
                            text-xl
                            font-semibold
                            mb-5
                        "
                    >
                        Info
                    </h2>

                    <div
                        className="
                            flex
                            flex-col
                            gap-4
                            text-gray-400
                        "
                    >
                        <p>Based in the Philippines</p>
                        <p>Open for opportunities</p>
                    </div>

                    {/* Back to Top */}
                    <button
                        onClick={scrollToTop}
                        className="
                            mt-8
                            flex
                            items-center
                            gap-2
                            bg-violet-600
                            hover:bg-violet-500
                            px-5
                            py-3
                            rounded-2xl
                            transition-all
                            duration-300
                            hover:scale-105
                            shadow-lg
                            shadow-violet-900/30
                        "
                    >
                        <ArrowUp size={18} />
                        Back to Top
                    </button>
                </div>
            </div>

            {/* Bottom */}
            <div
                className="
                    border-t
                    border-white/10
                    py-6
                    text-center
                    text-gray-500
                    text-sm
                "
            >
                © 2026 AJ Portfolio. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;