import React from "react";
import { FaGithub } from "react-icons/fa";

import sharingpfp from "./../../assets/sharingpfp.png";

import { SiReact, SiTailwindcss, SiReactrouter, SiNodedotjs, SiExpress, SiMongodb, SiJsonwebtokens,  } from "react-icons/si";

import { MdEmail } from "react-icons/md";
function Projectfilesharing() {
  return (
    <div>
      <div>
        <div className="flex flex-col min-h-screen rounded-3xl bg-white p-6 text-gray-900">
          {/* Project Image */}
          <img
            src={sharingpfp}
            alt="Project"
            className="w-2/4 h-3/4 object-cover rounded-3xl shadow-lg"
          />

          {/* Project Name and GitHub Link */}
          <div className="flex space-x-4 my-6 text-gray-800">
            <h1 className="px-2 text-3xl font-bold rounded-lg text-purple-700">
              Secure File Sharing Platform
            </h1>
            <a
              href="https://github.com/kshitijsharma123/CodeClauseInternship_FileSharing"
              target="_blank"
              className="p-1 text-gray-700 hover:text-purple-900"
            >
              <FaGithub size={36} />
            </a>
          </div>

          {/* Project Features and Tech */}
          <div className="w-4/5 bg-white p-6 rounded-xl shadow-lg border border-gray-300">
            <section className="text-sm space-y-4">
              <h2 className="text-lg font-bold text-purple-700 underline decoration-purple-500 mb-3">
                Feature Overview: Secure File Sharing Platform
              </h2>
              <p className="text-gray-800 leading-relaxed">
              This Secure File Sharing Platform is a web-based application designed to facilitate safe and efficient file transfers. Built using React, MongoDB, Mongoose, React Router DOM, and Express.js, it provides features such as password-protected file sharing, link generation, file upload & deletion, and email notifications.
              </p>

              <h3 className="text-md font-bold text-purple-600">
                Key Features:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li>
                  <span className="font-semibold text-gray-900">
                  Secure File Upload & Management:
                  </span>{" "}
                  Users can securely upload and delete files, with size limits and format restrictions for enhanced security.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                  Link Generation for Easy Access:
                  </span>{" "}
                  Create unique, time-limited links with expiration settings and customizable access controls
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                  Email Notifications:
                  </span>{" "}
                  Automatic email alerts when files are shared, ensuring secure link delivery and download confirmations.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                  User Authentication & Authorization: 
                  </span>{" "}
                  with secure login/logout, role-based access control, and session handling.
                </li>
                <li>
                  <span className="font-semibold text-gray-900">
                  Routing & Navigation: React Router DOM
                  </span>{" "}
                  ensures smooth page navigation, protected routes for authenticated users only.
                </li>
              </ul>

              <h3 className="text-md font-bold text-purple-600">Tech Stack:</h3>

              <ul className="list-disc list-inside space-y-2 text-gray-800">
  <li className="flex items-center space-x-2">
    <SiReact size={20} className="text-blue-500" />
    <SiTailwindcss size={20} className="text-teal-500" />
    <SiReactrouter size={20} className="text-red-500" />
    <span className="font-semibold text-gray-900">Frontend:</span> React.js, Tailwind CSS, React Router DOM
  </li>
  <li className="flex items-center space-x-2">
    <SiNodedotjs size={20} className="text-green-500" />
    <SiExpress size={20} className="text-gray-700" />
    <span className="font-semibold text-gray-900">Backend:
      </span> Node.js, Express.js
  </li>
  <li className="flex items-center space-x-2">
    <SiMongodb size={20} className="text-green-600" />
    <span className="font-semibold text-gray-900">Database:</span> MongoDB, Mongoose
  </li>
  <li className="flex items-center space-x-2">
    <SiJsonwebtokens size={20} className="text-yellow-500" />
    <span className="font-semibold text-gray-900">Authentication:</span> JWT-based secure login
  </li>
  <li className="flex items-center space-x-2">
    <MdEmail size={20} className="text-red-400" />
    <span className="font-semibold text-gray-900">Email Services:</span> Nodemailer for email notifications
  </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectfilesharing;
