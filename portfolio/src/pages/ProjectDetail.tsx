import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { projectsData } from "../data/projectsData";
import { slugify } from "../utils/helpers";

// Icons
import { AiFillGithub } from "react-icons/ai";
import { IoGameController } from "react-icons/io5";

const ProjectDetail: React.FC = () => {
  // 1. Get the slug string from the URL
  const { slug } = useParams<{ slug: string }>();
  
  // 2. Find the project where the slugified title matches the URL
  const project = projectsData.find((p) => slugify(p.title) === slug);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // 404 State
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral2 px-6 text-center">
        <h1 className="text-4xl font-bebas text-primary1 mb-4">Project Not Found</h1>
        <p className="text-text1 mb-8">The project you are looking for does not exist.</p>
        <Link to="/projects" className="bg-primary2 text-neutral1 px-6 py-2 rounded shadow hover:bg-primary1 transition-colors">
          Back to Projects
        </Link>
      </div>
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
          
          {/* Header Section */}
          <div className="p-8 md:p-10 border-b border-gray-100">
            <h1 className="text-3xl md:text-5xl font-bebas text-primary1 mb-6 text-center">
              {project.title}
            </h1>
            
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3">
              {project.categories.map((cat) => (
                <span key={cat} className="bg-primary1/10 text-primary1 px-3 py-1 rounded-full text-sm font-semibold">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Media Section */}
          <div className="p-8 md:p-10 bg-gray-50">
            {/* Main Image or Carousel Placeholder */}
            {/* If you have an ImageCarousel component, put it here. Otherwise, use standard img */}
            <div className="rounded-xl overflow-hidden shadow-md mb-10">
              <img 
                src={project.images[0]} 
                alt={project.title} 
                className="w-full h-auto object-cover" 
              />
            </div>

            {/* Video Embed (Responsive) */}
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

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 pt-8 border-t border-gray-100">
              {/* GitHub Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-text1 text-white px-6 py-3 rounded-lg hover:bg-black transition-colors shadow-md font-medium"
                >
                  <AiFillGithub size={20} />
                  View Source Code
                </a>
              )}

              {/* Play/Live Link */}
              {project.play && (
                <a
                  href={project.play}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-primary2 text-white px-6 py-3 rounded-lg hover:bg-primary1 transition-colors shadow-md font-medium"
                >
                  <IoGameController size={20} />
                  Play Now
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;