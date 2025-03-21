import React from "react";
import { FaGithub } from "react-icons/fa";
import backendpfp from './../../assets/backednpfp.png';
import { SiNodedotjs, SiExpress, SiMongodb, SiCloudinary, SiJsonwebtokens } from "react-icons/si";

function ProjectHome() {
 

  return (
    <div className="flex flex-col min-h-screen rounded-3xl bg-white p-6 text-gray-900">
      {/* Project Image */}
      <img
        src={backendpfp}
        alt="Project"
        className="w-2/4 h-3/4 object-cover rounded-3xl shadow-lg"
      />

      {/* Project Name and GitHub Link */}
      <div className="flex space-x-4 my-6 text-gray-800">
        <h1 className="px-2 text-3xl font-bold rounded-lg text-purple-700">
          Youtube Backend Clone
        </h1>
        <a 
          href="https://github.com/kshitijsharma123/YoutubeBackendClone" 
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
            Feature Overview: YouTube Backend Clone
          </h2>
          <p className="text-gray-800 leading-relaxed">
            This YouTube backend clone is a robust server-side application designed to replicate essential YouTube functionalities. It provides authentication, media management, and seamless user interactions using a modern web stack for efficiency and scalability.
          </p>
          
          <h3 className="text-md font-bold text-purple-600">Key Features:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><span className="font-semibold text-gray-900">User Authentication & Authorization:</span> Secure login/logout, JWT-based authentication, role-based access control.</li>
            <li><span className="font-semibold text-gray-900">Video & Comment Management:</span> Upload, update, delete videos; like/dislike videos; threaded comment system.</li>
            <li><span className="font-semibold text-gray-900">User Profile Management:</span> Cloudinary-based profile pictures, edit profile details, delete accounts securely.</li>
            <li><span className="font-semibold text-gray-900">Database & Media Storage:</span> MongoDB for structured data, Cloudinary integration for optimized media storage.</li>
            <li><span className="font-semibold text-gray-900">Advanced Features:</span> Video recommendations, watch history, and user subscriptions.</li>
          </ul>
          
          <h3 className="text-md font-bold text-purple-600">Tech Stack:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li className="flex items-center space-x-2">
              <SiNodedotjs size={20} className="text-green-500" />
              <span className="font-semibold text-gray-900">Node.js & Express.js:</span> Scalable backend framework.
            </li>
            <li className="flex items-center space-x-2">
              <SiMongodb size={20} className="text-green-600" />
              <span className="font-semibold text-gray-900">MongoDB & Mongoose:</span> NoSQL database and ORM.
            </li>
            <li className="flex items-center space-x-2">
              <SiCloudinary size={20} className="text-blue-500" />
              <span className="font-semibold text-gray-900">Cloudinary:</span> Efficient media storage & CDN.
            </li>
            <li className="flex items-center space-x-2">
              <SiJsonwebtokens size={20} className="text-yellow-500" />
              <span className="font-semibold text-gray-900">JWT Authentication:</span> Secure token-based authentication.
            </li>
            <li className="flex items-center space-x-2">
              <SiExpress size={20} className="text-gray-900" />
              <span className="font-semibold text-gray-900">REST API:</span> Well-structured API endpoints for smooth frontend integration.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default ProjectHome;
