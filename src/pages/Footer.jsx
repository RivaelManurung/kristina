import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
  // Define the scrollToTop function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer bg-base-300 text-base-content p-4 flex flex-col md:flex-row items-center justify-between">
      {/* Copyright Text */}
      <aside className="text-center md:text-left my-2 md:my-0">
        <p>
          Copyright © {new Date().getFullYear()} Kristina Sitorus. All Rights Reserved
        </p>
      </aside>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300 text-sm font-light"
      >
        <FaArrowCircleUp className="text-red-800 dark:text-red-500" />
        Go back to top
      </button>
    </footer>
  );
};

export default Footer;
