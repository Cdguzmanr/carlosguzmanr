import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { type Project } from "../../types/IProject";
import { slugify } from "../../utils/helpers";
import { useCategoryFilterNav } from "../../hooks/useCategoryFilterNav"; // Import the hook!
import { IoGameController } from "react-icons/io5"; // Using react-icons for the play button

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Use the hook to get the reusable function
  const { handleFilterCategory } = useCategoryFilterNav();
  const slug = slugify(project.title);

  return (
    <motion.div 
      whileHover={{ y: -8 }} // The subtle lift animation
      transition={{ type: "spring", stiffness: 300 }}
      className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300 h-full w-full max-w-sm mx-auto mt-10" // Added mt-10 to account for the floating image
    >
      
      {/* --- Floating Thumbnail --- */}
      <Link to={`/project/${slug}`} className="block relative mx-4 -mt-6 h-48 overflow-hidden rounded-xl shadow-lg group cursor-pointer">
        <div className="absolute inset-0 bg-primary1/20 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {/* Featured Badge (New Feature) */}
        {project.featured && (
          <span className="absolute top-2 right-2 z-20 bg-primary2 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            FEATURED
          </span>
        )}
      </Link>

      {/* --- Text Content --- */}
      <div className="flex flex-col grow px-6 pt-6 pb-2">
        <Link to={`/project/${slug}`}>
          <h2 className="mb-2 text-2xl leading-snug text-primary1 font-bebas tracking-wide hover:text-primary2 transition-colors">
            {project.title}
          </h2>
        </Link>

        {/* Categories (Limited to 4) */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.categories.slice(0, 4).map((category) => (
            <button
              key={category}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering card click if any
                handleFilterCategory(category);
              }}
              className="bg-neutral2 text-text1 text-[10px] font-bold uppercase tracking-wider rounded-full px-3 py-1 hover:bg-primary2 hover:text-white transition-colors duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Summary */}
        <p className="text-text1 text-sm leading-relaxed line-clamp-3 mb-4">
          {project.summary}
        </p>
      </div>

      {/* --- Bottom Buttons --- */}
      <div className="p-6 pt-0 mt-auto flex items-center justify-between gap-4">
        
        {/* Read More */}
        <Link 
          to={`/project/${slug}`}
          className="flex-1 text-center rounded-lg bg-primary1 py-3 px-6 text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 hover:bg-night focus:opacity-[0.85]"
        >
          Read More
        </Link>

        {/* Play Button (Only if game link exists) */}
        {project.play && (
          <a 
            href={project.play}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 bg-primary2 text-white shadow-md hover:scale-110 hover:bg-accent1 transition-all duration-300"
            title="Play Game"
          >
            <IoGameController size={20} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;