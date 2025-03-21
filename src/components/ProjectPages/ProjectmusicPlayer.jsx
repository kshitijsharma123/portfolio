import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { SiReact, SiTailwindcss, SiCloudinary, SiHtml5, SiReactrouter } from "react-icons/si";

import musicplayerpfp from './../../assets/musicplayer.png'

function ProjectmusicPlayer() {
  return (
    <div>

         <div className="flex flex-col min-h-screen rounded-3xl bg-white p-6 text-gray-900">
              {/* Project Image */}
              <img
                src={musicplayerpfp}
                alt="Project"
                className="w-2/4 h-3/4 object-cover rounded-3xl shadow-lg"
              />
        
              {/* Project Name and GitHub Link */}
              <div className="flex space-x-4 my-6 text-gray-800">
                <h1 className="px-2 text-3xl font-bold rounded-lg text-purple-700">
                React Music Player
                </h1>
                <a 
                  href="https://github.com/kshitijsharma123/CodeClauseInternship_MusicPlayer" 
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
                    Feature Overview: React Music Player
                  </h2>
                  <p className="text-gray-800 leading-relaxed">
                  This React Music Player is a simple yet functional web-based music player built using React for dynamic UI rendering and Tailwind CSS for sleek and responsive styling. The application offers an intuitive user experience, allowing users to play, pause, skip, and manage their music playlist effortlessly.
                  </p>
                  
                  <h3 className="text-md font-bold text-purple-600">Key Features:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-800">
                    <li><span className="font-semibold text-gray-900">Music Playback Controls:</span>Play, pause, next/previous track, seek bar for scrubbing, and volume adjustment.</li>
                    <li><span className="font-semibold text-gray-900">Playlist Management:</span> Add/remove songs dynamically, real-time tracklist updates, and support for various formats (MP3, WAV, etc.).</li>
                    <li><span className="font-semibold text-gray-900">UI & Styling with Tailwind CSS:</span> Fully responsive design, dark/light mode, smooth animations, and modern aesthetics.</li>
                    <li><span className="font-semibold text-gray-900">DAudio Handling & State Management:</span> React hooks and state for managing track data, HTML5 Audio API for seamless playback.</li>
                    <li><span className="font-semibold text-gray-900">Routing & Navigation: React Router:</span> Enables multi-page navigation (home, playlist, settings) with track selection via URL parameters.</li>
                  </ul>
              
                  <h3 className="text-md font-bold text-purple-600">Tech Stack:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-800">
  <li className="flex items-center space-x-2">
    <SiReact size={20} className="text-blue-500" />
    <span className="font-semibold text-gray-900">React.js:</span> Component-based UI framework
  </li>
  <li className="flex items-center space-x-2">
    <SiTailwindcss size={20} className="text-teal-500" />
    <span className="font-semibold text-gray-900">Tailwind CSS:</span> Modern, responsive styling
  </li>
  <li className="flex items-center space-x-2">
    <SiCloudinary size={20} className="text-blue-400" />
    <span className="font-semibold text-gray-900">Cloudinary:</span> Efficient media storage & CDN
  </li>
  <li className="flex items-center space-x-2">
    <SiHtml5 size={20} className="text-orange-500" />
    <span className="font-semibold text-gray-900">HTML5 Audio API:</span> Native music playback control
  </li>
  <li className="flex items-center space-x-2">
    <SiReactrouter size={20} className="text-red-500" />
    <span className="font-semibold text-gray-900">React Router:</span> Enables seamless page navigation
  </li>
</ul>
                </section>
              </div>
            </div>
    </div>
  )
}

export default ProjectmusicPlayer