import React from "react";
import { useRef } from "react"; 

const skills = [
  {
    category: "Frontend Development Expertise",
    skills: [
      {
        name: "Proficiency in frontend technologies like HTML, CSS, JavaScript, and frameworks like React",
        level: 5,
      },
      {
        name: "Understanding of UI/UX principles and responsive design",
        level: 4,
      },
      {
        name: "Ability to debug, optimize, and maintain scalable frontend codebases",
        level: 4,
      },
    ],
  },
  {
    category: "Backend and HTTP Workflow Knowledge",
    skills: [
      {
        name: "Familiarity with how services handle HTTP requests, including REST APIs",
        level: 4,
      },
      {
        name: "Basic understanding of server-side technologies like Node.js",
        level: 3,
      },
      {
        name: "Knowledge of request/response cycles, middleware, and error handling in web applications",
        level: 3,
      },
    ],
  },
  {
    category: "Version Control and Collaboration",
    skills: [
      {
        name: "Experience with Git and platforms like GitHub or GitLab for code collaboration",
        level: 2,
      },
      {
        name: "Knowledge of best practices for writing high-quality pull requests, including comprehensive descriptions, code reviews, and resolving conflicts",
        level: 2,
      },
    ],
  },
];

const SkillBar = ({ level }) => {
  const percentage = (level / 5) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
      <div
        className="bg-purple-600 h-2.5 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};


const SkillsComponent = () => {
    const skillsRef=useRef(null)

    return (
    <div className="p-6 bg-white rounded-lg max-w-4xl mx-auto">
      {/* <h1 className="text-2xl font-bold mb-4">Skills</h1> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {" "}
        
        {skills.map((skillCategory, index) => (
          <div className="p-3" key={index} ref={skillsRef} id="skill" >
            <h3 className="font-bold text-lg mb-4">{skillCategory.category}</h3>{" "}

            {skillCategory.skills.map((skill, idx) => (
              <div key={idx} className="mb-6">
                {" "}
                
                <p className="text-sm">{skill.name}</p>
                <SkillBar level={skill.level} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;
