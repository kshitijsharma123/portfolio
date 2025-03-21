import React from "react";

import resume from "./../assets/Kshitij-Sharma-resume.pdf";

const Navbar = () => {
  const handleResumeClick = () => {
  
    window.open(resume, "_blank");
  };

  const scrollToSkills = () => {
    document.getElementById("skill").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProject = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl">👨‍💻</span>
          <h1 className="text-xl font-semibold text-gray-800">Kshitij Sharma</h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <li>
            <a href="#" className="hover:text-cyan-500" onClick={handleResumeClick}>
              Resume
            </a>
          </li>
          <li>
            <a onClick={scrollToSkills} className="cursor-pointer hover:text-cyan-500">
              Skill
            </a>
          </li>
          <li>
            <a onClick={scrollToProject} className="hover:text-cyan-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-500">
              Contact Me
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
