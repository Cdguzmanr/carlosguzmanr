import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "../../styles/embla.css";

import ProjectCard from "./CardPro";
import { type Project } from "../../types/IProject";
import { sortProjects } from "../../utils/sortProjects";

interface ProjectsCarouselProps {
  projects: Project[];
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
  const sortedProjects = sortProjects(projects);

  // Embla setup
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      duration: 25,
    },
    [
      Autoplay({
        delay: 8000,
        stopOnInteraction: false,
      }),
    ]
  );

  // Go to next slide when slide changes (optional)
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">

        {sortedProjects.map((project) => (
          <div
            key={project.id}
            className="
              embla__slide 
              px-3 py-4
              h-[455px]
              sm:basis-1/1
              md:basis-1/2
              lg:basis-1/3
            "
          >
            <ProjectCard project={project} />
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProjectsCarousel;
