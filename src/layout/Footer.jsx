
import logo from "../assets/images/logo.png";
import github from "../assets/icons/github.svg"
import linkedIn from "../assets/icons/linkedln.svg";
import gmail from "../assets/icons/gmail.svg";

const Footer = () => {
    return (
        <footer className="bg-main text-white">
            <div className="max-w-6xl mx-auto p-5 flex justify-center md:justify-between items-center">
                <img className="hidden md:block w-10" src={logo} alt="logo" />
                <h2>All rights reserved. | 2026</h2>
                <div className="hidden md:flex gap-5">
                    <a href="">
                        <img className="w-10" src={github} alt="logo" />
                    </a>
                    <a href="">
                        <img className="w-10" src={linkedIn} alt="logo" />
                    </a>
                    <a href="">
                        <img className="w-10" src={gmail} alt="logo" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;