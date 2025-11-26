import React, { useCallback, useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import ProjectCard from "./CardPro";
import { type Project } from "../../types/IProject";
import { sortProjects } from "../../utils/sortProjects";

interface ProjectsCarouselProps {
  projects: Project[];
}

const NewProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
  const sortedProjects = sortProjects(projects);

  // Embla setup
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [
      Autoplay({
        delay: 8000,
        stopOnInteraction: true,
      }),
    ]
  );

  // Dot navigation state
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Update selected index when Embla moves
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  // Setup listeners
  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", () => onSelect(emblaApi));
  }, [emblaApi, onSelect]);

  // Buttons
  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla relative">
      {/* Viewport */}
      <div className="embla__viewport mx-auto h-auto w-full" ref={emblaRef}>
        <div className="embla__container h-full mb-6">
          {sortedProjects.map((project) => (
            <div key={project.id} className="embla__slide py-6">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Prev button */}
      <button
        onClick={scrollPrev}
        className="
          embla__prev
          absolute left-0 top-1/2 -translate-y-1/2
          z-10 bg-white/80 shadow px-3 py-2 rounded-full
        "
      >
        <svg className="w-4 h-4" viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
          />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={scrollNext}
        className="
          embla__next
          absolute right-0 top-1/2 -translate-y-1/2
          z-10 bg-white/80 shadow px-3 py-2 rounded-full
        "
      >
        <svg className="w-4 h-4" viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
          />
        </svg>
      </button>

      {/* Dot menu */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-3">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`
              h-3 w-3 rounded-full transition
              ${index === selectedIndex
                ? "bg-text1 scale-125 shadow"
                : "bg-gray-300 hover:bg-gray-400"}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default NewProjectsCarousel;
