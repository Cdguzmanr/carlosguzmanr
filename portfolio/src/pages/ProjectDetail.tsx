import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { projectsData } from "../data/projectsData";
import { slugify } from "../utils/helpers";
import ImageCarousel from "../components/common/ImageCarousel";
import { type ProjectLink } from "../types/IProject"; // Import types

// Icons
import { AiFillGithub } from "react-icons/ai";
import { IoGameController } from "react-icons/io5";
import { FaGlobe, FaExternalLinkAlt } from "react-icons/fa"; // New icons

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => slugify(p.title) === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // --- Helper to determine Style and Icon based on Type ---
  const getLinkConfig = (link: ProjectLink) => {
    switch (link.type) {
      case 'github':
        return {
          icon: <AiFillGithub size={20} />,
          text: link.label || "Source Code",
          // Dark button for code
          style: "bg-text1 hover:bg-night text-white"
        };
      case 'game':
        return {
          icon: <IoGameController size={20} />,
          text: link.label || "Play Now",
          // Primary Green for Games (Action)
          style: "bg-primary1 hover:bg-primary1/90 text-white"
        };
      case 'live':
        return {
          icon: <FaGlobe size={18} />,
          text: link.label || "Visit Site",
          // Accent Blue or Gold for Websites
          style: "bg-accent1 hover:bg-accent1/90 text-white"
        };
      default:
        return {
          icon: <FaExternalLinkAlt size={16} />,
          text: link.label || "Open Link",
          style: "bg-primary2 hover:bg-primary2-dark text-neutral1"
        };
    }
  };

  if (!project) {
    return (
      /* ... keep your existing 404 return ... */
      <div className="min-h-screen flex items-center justify-center">Project Not Found</div>
    );
  }

  return (
    <div className="bg-neutral2 min-h-screen pt-8 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <Link to="/projects" className="text-text1 hover:text-primary2 mb-6 inline-block font-medium">
          &larr; Back to Projects
        </Link>

        {/* Content Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">

          {/* ... Header Section (Unchanged) ... */}
          <div className="p-8 md:p-10 border-b border-gray-100">
            <h1 className="text-3xl md:text-5xl font-bebas text-primary1 mb-6 text-center">
              {project.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-3">
              {project.categories.map((cat) => (
                <span key={cat} className="bg-primary1/10 text-primary1 px-3 py-1 rounded-full text-sm font-semibold">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Media Section (Unchanged) */}
          <div className="p-8 md:p-10 bg-gray-50">
            <div className="rounded-xl overflow-hidden shadow-md mb-10">
              <ImageCarousel imagesUrl={project.images} />
            </div>
            {project.video && (
              <div className="relative w-full rounded-xl overflow-hidden shadow-md mb-10 pt-[56.25%] bg-black">
                <iframe
                  src={project.video}
                  title={project.title}
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>

          {/* Description & Links */}
          <div className="p-8 md:p-10">
            <div className="markdown prose prose-lg max-w-none text-text1 prose-headings:font-bebas prose-headings:text-primary1 prose-a:text-primary2">
              <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                {project.description}
              </ReactMarkdown>
            </div>

            {/* NEW DYNAMIC LINK SECTION */}
            {project.links && project.links.length > 0 && (
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mt-12 pt-8 border-t border-gray-100">
                {project.links.map((link, index) => {
                  const config = getLinkConfig(link);

                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`
                        flex items-center justify-center gap-2 px-6 py-3 rounded-lg 
                        transition-colors shadow-md font-medium min-w-[200px]
                        ${config.style}
                      `}
                    >
                      {config.icon}
                      <span>{config.text}</span>
                    </a>
                  );
                })}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;