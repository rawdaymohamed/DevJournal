import { useState } from "react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <FaCode className="text-2xl lg:text-3xl" />
        <h1 className="text-xl lg:text-2xl font-bold">DevJournal</h1>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden cursor-pointer">
        {/* MOBILE MENU Button */}
        {open ? (
          <button
            onClick={() => setOpen(false)}
            className="text-xl"
            aria-label="Close menu"
            title="Close menu"
          >
            <FaTimes />
          </button>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="text-xl"
            aria-label="Open menu"
            title="Open menu"
          >
            <FaBars />
          </button>
        )}
        {/* MOBILE MENU CONTENT */}
        <div
          className={`w-full h-screen absolute top-16 right-0 flex flex-col items-center justify-center gap-6 text-xl font-medium transition-transform duration-300 ease-in-out transform md:hidden z-10 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <a href="#home" className="hover:text-purple-500">
            Home
          </a>
          <a href="#about" className="hover:text-purple-500">
            About
          </a>
          <a href="#trending" className="hover:text-purple-500">
            Trending
          </a>
          <a href="#contact" className="hover:text-purple-500">
            Contact
          </a>
          <button className="bg-gradient-to-r cursor-pointer from-purple-500 to-indigo-500 text-white px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 ease-in-out active:scale-95">
            Sign Up
          </button>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 text-lg font-medium">
        <a href="#home" className="hover:text-purple-500">
          Home
        </a>
        <a
          href="#trending"
          className="hover:text-purple-500 transition-colors duration-300 ease-in-out cursor-pointer"
        >
          Trending
        </a>
        <a
          href="#about"
          className="hover:text-purple-500 transition-colors duration-300 ease-in-out cursor-pointer"
        >
          About
        </a>
        <a
          href="#contact"
          className="hover:text-purple-500 transition-colors duration-300 ease-in-out cursor-pointer"
        >
          Contact
        </a>
        <button className="bg-gradient-to-r cursor-pointer from-purple-500 to-indigo-500 text-white px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 ease-in-out active:scale-95">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
