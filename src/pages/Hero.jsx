import React from "react";
import heroImage from "../assets/kristina.jpeg";

function Hero() {
  return (
    <div
      id="hero"
      className="hero bg-gray-50 min-h-screen flex items-center justify-center"
    >
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center text-center lg:text-left p-6 rounded-lg shadow-lg bg-white">
        <img
          src={heroImage}
          alt="Hero"
          className="max-w-xs lg:max-w-sm rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
        />
        <div className="lg:ml-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Kristina Sitorus
          </h1>
          <p className="py-4 text-gray-600">
            4th semester student of Information Technology program at IT Del,
            with a strong interest in UI Design, Software Testing, and Project
            Management. I have comprehensive experience gained through 4 semesters
            of coursework and direct involvement in college projects, and have
            attended related certified training. I possess an outstanding
            portfolio, using tools such as Figma, CorelDRAW, Canva, Eclipse, and
            ClickUp. Equipped with a proven track record, I am eager to utilize my
            acquired expertise and committed to continuous growth through
            upcoming educational programs.
          </p>
          <a
            href="#projects"
            className="btn btn-primary transition-transform duration-200 hover:scale-105"
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
