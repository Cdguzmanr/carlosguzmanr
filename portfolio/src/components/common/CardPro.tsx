import React from "react";
import { useNavigate } from "react-router-dom";
import PlayBtn from "./PlayBtn";
import { type Project } from "../../types/IProject";
import RoundLink from "../common/RoundLink";

interface ProjectCardProps {
  project: Project;
}

const CardPro: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  const slug = project.title.toLowerCase().replace(/\s+/g, "-");

  const handleViewProject = () => {
    navigate(`/projects/${slug}`);
  };

  // const handleFilterCategory = (category: string) => {
  const handleFilterCategory = () => {
    // Your Vite version seems to not use query filters yet,
    // so this just takes the user to the Projects page.
    navigate("/projects");
  };

  return (
    <div className="pt-2 relative flex w-81 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:bg-neutral-100 hover:shadow-lg transition-all duration-300 h-full mx-auto my-auto">
      
      {/* Thumbnail */}
      <img
        src={project.images[0]}
        alt={project.title}
        onClick={handleViewProject}
        className="relative mx-4 -mt-6 h-40 overflow-clip rounded-xl bg-linear-to-r text-white bg-text shadow-lg cursor-pointer"
      />

      {/* Text Content */}
      <div className="flex flex-col grow px-6 pt-6 pb-2">
        <h2 className="mb-2 text-2xl leading-snug tracking-normal text-text2 font-bebas">
          {project.title}
        </h2>

        {/* Categories */}
        <div className="pb-2 line-clamp-1">
          {project.categories.map((category) => (
            <button
              key={category}
              className="bg-primary2 text-white font-caviardreams text-xs rounded-full px-3 py-1 m-1 hover:bg-accent1 transition-colors duration-300"
              onClick={() => handleFilterCategory()} 
              // onClick={() => handleFilterCategory(category)} 
            >
              {category}
            </button>
          ))}
        </div>

        {/* Summary */}
        <p className="text-text2 font-caviardreams text-base leading-relaxed line-clamp-4">
          {project.summary}
        </p>
      </div>

      {/* Bottom Buttons */}
      <div className="p-6 pt-0 mt-auto flex flex-row justify-between items-center">
        
        {/* Read More */}
        <RoundLink name="Read More" to={`/projects/${slug}`} className="w-2/5" />
        {/* <button
          onClick={handleViewProject}
          className="rounded-lg bg-ucla-blue py-3 px-6 text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 duration-300"
        >
          Read More
        </button> */}

        {/* Play Button (if exists) */}
        {project.play && <PlayBtn gameLink={project.play} />}
      </div>
    </div>
  );
};

export default CardPro;
