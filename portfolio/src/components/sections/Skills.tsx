"use client";
// import React from "react";
import { motion } from "framer-motion";
import { VscAzureDevops, VscAzure } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";
import { DiVisualstudio, DiMsqlServer  } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";

import {
  SiCplusplus,
  SiJavascript,
  SiPhp,
  SiAndroidstudio,
  SiTailwindcss,
  SiTypescript,
  SiDotnet,
  SiJquery, 
} from "react-icons/si";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaBitbucket,
  FaNodeJs,
  FaReact,
  FaUnity,
} from "react-icons/fa6";

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: [
        { name: "C Sharp", icon: <TbBrandCSharp />, star: true },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Python", icon: <FaPython /> },
        { name: "PHP", icon: <SiPhp /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: ".Net Core", icon: <SiDotnet />, star: true },
        { name: "jQuery", icon: <SiJquery />, star: true },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Unity", icon: <FaUnity /> },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Azure DevOps", icon: <VscAzureDevops  />, star: true },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Bitbucket", icon: <FaBitbucket /> },
        { name: "Android Studio", icon: <SiAndroidstudio /> },
        { name: "Visual Studio", icon: <DiVisualstudio />, star: true },
        { name: "VS Code", icon: <BiLogoVisualStudio />, star: true },
      ],
    },
    {
      category: "Platforms",
      skills: [
        { name: "Microsoft Azure", icon: <VscAzure /> },
        { name: "SQL Server", icon: <DiMsqlServer /> },
      ],
    },
  ];

  return (
    <>
      <section
        className="py-12 bg-neutral2 transition-colors duration-300"
        id="skills"
      >
        <div className="container mx-auto px-6">
          <h2 className="font-bebas text-4xl text-center mb-8 text-primary1">
            Skills
          </h2>
          <div className="grid gap-8">
            {skillsData.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              > 
                <h3 className="font-bebas text-2xl text-text2">
                  {group.category}
                  <span className='w-full border-b-4 block text-primary1'></span>
                </h3>

                <div className="flex flex-wrap gap-6 mt-2 text-white">
                  {group.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className={`relative flex flex-col items-center gap-2 p-4 rounded-lg shadow-md transition-all 
                        ${
                          skill.star
                            ? "premium-card bg-primary2" // premium styling and animation for star skills
                            : "bg-primary2"
                        }`}
                    >
                      <div className="text-4xl text-ucla-blue">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
);
};

export default Skills;
