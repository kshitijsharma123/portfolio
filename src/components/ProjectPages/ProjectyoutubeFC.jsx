import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { SiReact, SiRedux, SiMongodb, SiJavascript, SiNodedotjs } from 'react-icons/si'

import frontendpfp from './../../assets/frontendpfp.png'

function ProjectyoutubeFC() {
  return (
   <div className="flex flex-col min-h-screen rounded-3xl bg-white p-6 text-gray-900">
         {/* Project Image */}
         <img
           src={frontendpfp}
           alt="Project"
           className="w-2/4 h-3/4 object-cover rounded-3xl shadow-lg"
         />
   
         {/* Project Name and GitHub Link */}
         <div className="flex space-x-4 my-6 text-gray-800">
           <h1 className="px-2 text-3xl font-bold rounded-lg text-purple-700">
             Youtube Frontend Clone
           </h1>
           <a 
             href="https://github.com/kshitijsharma123/YotubeClone_Frontend" 
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
               Feature Overview: YouTube Frontend Clone
             </h2>
             <p className="text-gray-800 leading-relaxed">
             This YouTube frontend clone is a highly interactive and responsive web application designed to replicate essential YouTube functionalities. It provides cookie-based authentication, media handling, state management, and a custom-built video player, ensuring a smooth and efficient user experience.
             </p>
             
             <h3 className="text-md font-bold text-purple-600">Key Features:</h3>
             <ul className="list-disc list-inside space-y-2 text-gray-800">
               <li><span className="font-semibold text-gray-900">Authentication & Cookie Management:</span> Secure login/logout, persistent user sessions, and token-based API authentication.</li>
               <li><span className="font-semibold text-gray-900">State Management with Redux:</span> Global state management for user data, video interactions, and UI preferences.</li>
               <li><span className="font-semibold text-gray-900">Video & Image Handling:</span> Upload, manage, and display media with dynamic thumbnails and optimized streaming.</li>
               <li><span className="font-semibold text-gray-900">Custom Video Player:</span> Built from scratch with play, pause, seek, volume control, fullscreen mode, and progress tracking.</li>
               <li><span className="font-semibold text-gray-900">Navigation & Routing:</span> React Router DOM for seamless page transitions, deep linking, and structured navigation.</li>
               <li><span className="font-semibold text-gray-900">Responsive UI & User Experience:</span> Mobile-friendly layout with dark/light mode toggle.</li>
               <li><span className="font-semibold text-gray-900">Forms & User Interaction:</span> Validated user inputs for authentication, video uploads, comments, and likes.</li>
             </ul>
             
             <h3 className="text-md font-bold text-purple-600">Tech Stack:</h3>
             <ul className="list-disc list-inside space-y-2 text-gray-800">
               <li className="flex items-center space-x-2">
                 <SiReact size={20} className="text-blue-500" />
                 <span className="font-semibold text-gray-900">React.js & Redux:</span> Modern frontend framework with efficient state management.
               </li>
               <li className="flex items-center space-x-2">
                 <SiRedux size={20} className="text-purple-500" />
                 <span className="font-semibold text-gray-900">Redux:</span> State management for a predictable application state.
               </li>
               <li className="flex items-center space-x-2">
                 <SiJavascript size={20} className="text-yellow-500" />
                 <span className="font-semibold text-gray-900">JavaScript:</span> Core language for building the frontend.
               </li>
               <li className="flex items-center space-x-2">
                 <SiNodedotjs size={20} className="text-green-500" />
                 <span className="font-semibold text-gray-900">Node.js:</span> Backend server handling API requests.
               </li>
               <li className="flex items-center space-x-2">
                 <SiMongodb size={20} className="text-green-600" />
                 <span className="font-semibold text-gray-900">MongoDB:</span> Database for storing user and video data.
               </li>
             </ul>
           </section>
         </div>
       </div>
  )
}

export default ProjectyoutubeFC
