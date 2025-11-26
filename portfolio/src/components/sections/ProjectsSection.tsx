"use client";
import React from "react";
import NewProjectsCarousel from "../common/NewProjectsCarousel";
import { projectsData } from "../../data/projectsData";
import RoundLink from "../common/RoundLink";

const ProjectsSection: React.FC = () => {
  // Filter featured projects
  const featuredProjects = projectsData.filter(project => project.featured);

  return (
    <section id="projects" className="py-16 bg-neutral2">
      <div className="max-w-6xl mx-auto px-6 h-full">
        
        <h2 className="font-bebas text-4xl text-center mb-8 text-primary1">
          Featured Work
        </h2>

        <div className=" ">

          {/* <ProjectsCarousel projects={featuredProjects} /> */}
          {/* <EmblaCarousel slides={featuredProjects.map((_, index) => index)} /> */}
          <NewProjectsCarousel projects={featuredProjects} />
        </div>

        
        <div className="text-center mt-8">
          <p className="text-text2 font-caviardreams text-xl mb-6">
            Like what you see? Explore all my projects and discover more of my work.
          </p>

          <RoundLink name="See All Projects" to="/projects" className="" />

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
