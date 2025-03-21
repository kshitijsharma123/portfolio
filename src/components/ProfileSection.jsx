import React from "react";
import profileImage from "./../assets/kshitij.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ProfileSection = () => {
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-6 md:p-16 bg-white font-medium ">
      <div className="flex justify-center md:justify-start w-full md:w-1/3">
        <div className="relative w-72 h-72 md:w-64 md:h-64 rounded-full overflow-hidden shadow-md border-4 border-gray-200">
          <img
            src={profileImage}
            alt="Kshitij Sharma"
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-2/3 mt-6 md:mt-0 md:ml-8 text-center md:text-left">
        <h3 className="text-gray-500 text-xl font-medium">Web Developer</h3>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
          Kshitij Sharma
        </h1>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Hi, I'm a 20-year-old web developer from Dehradun with a strong
          passion for building dynamic and user-friendly web applications. With
          solid expertise in the MERN stack (MongoDB, Express, React, Node.js),
          I am skilled in creating scalable and efficient full-stack solutions.
          I also have a strong understanding of web security protocols,
          including HTTPS, ensuring that all projects are secure and reliable.
          Additionally, I am proficient in using Git for version control,
          allowing me to collaborate effectively in team environments and
          maintain clean, well-organized code. I’m always eager to learn and
          improve my skills, and I enjoy tackling new challenges in the
          ever-evolving world of web development.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
          <div className="flex space-x-4">
            <a
              href="https://github.com/kshitijsharma123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kshitij-sharma-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
