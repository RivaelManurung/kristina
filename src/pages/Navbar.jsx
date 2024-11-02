import React, { useState } from "react";
import { FaBars, FaTimes, FaMoon } from "react-icons/fa";

function Navbar({ toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu visibility

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the mobile menu
  };

  return (
    <div className="navbar bg-base-200 shadow-lg fixed top-0 left-0 w-full z-50 transition-all">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a className="text-3xl font-bold text-primary">Portfolio</a>
        <div className="hidden lg:flex space-x-6">
          <a className="hover:text-primary transition-colors" href="#hero">About</a>
          <a className="hover:text-primary transition-colors" href="#projects">Projects</a>
          <a className="hover:text-primary transition-colors" href="#contact">Contact</a>
          {/* <FaMoon 
            className="text-2xl cursor-pointer hover:text-primary transition-colors"
            onClick={toggleTheme} 
            title="Toggle Theme"
          /> */}
        </div>
        <button onClick={handleToggle} className="lg:hidden">
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-base-200 p-4">
          <ul className="space-y-2">
            <li>
              <a className="block text-lg hover:text-primary transition-colors" href="#hero">About</a>
            </li>
            <li>
              <a className="block text-lg hover:text-primary transition-colors" href="#projects">Projects</a>
            </li>
            <li>
              <a className="block text-lg hover:text-primary transition-colors" href="#contact">Contact</a>
            </li>
            {/* <li>
              <FaMoon 
                className="text-2xl cursor-pointer hover:text-primary transition-colors"
                onClick={toggleTheme} 
                title="Toggle Theme"
              />
            </li> */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
