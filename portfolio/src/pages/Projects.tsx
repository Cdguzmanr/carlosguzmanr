import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import ProjectCard from "../components/common/ProjectCard";
import { projectsData } from "../data/projectsData";
import CategoryButton from "../components/common/CategoryButton";
// import { type Project } from "../types/IProject";

const ProjectsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<string | null>(filterParam);
  const [searchQuery, setSearchQuery] = useState("");

  // Sync URL with State
  useEffect(() => {
    setSelectedCategory(filterParam);
  }, [filterParam]);

  // Extract unique categories
  const allCategories = useMemo(() => {
    const categoriesSet = new Set<string>();
    projectsData.forEach((p) => p.categories.forEach((c) => categoriesSet.add(c)));
    return Array.from(categoriesSet).sort();
  }, []);

  // Filter Logic
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = selectedCategory
        ? project.categories.includes(selectedCategory)
        : true;
      
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.summary.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    }).sort((a, b) => b.tier - a.tier); // Keep your tier sorting!
  }, [selectedCategory, searchQuery]);

  // Handlers
  const handleCategoryClick = (cat: string) => {
    if (selectedCategory === cat) {
      setSelectedCategory(null);
      setSearchParams({}); // Clear URL param
    } else {
      setSelectedCategory(cat);
      setSearchParams({ category: cat }); // Set URL param
    }
  };

  return (
    <section className="pt-10 pb-16 bg-neutral2 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bebas font-bold text-center text-primary1 mb-8">
          My Projects
        </h1>

        {/* --- Controls Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <CategoryButton 
              label="All" 
              isSelected={!selectedCategory} 
              onClick={() => { setSelectedCategory(null); setSearchParams({}); }} 
            />
            {allCategories.map((cat) => (
              <CategoryButton
                key={cat}
                label={cat}
                isSelected={selectedCategory === cat}
                onClick={() => handleCategoryClick(cat)}
              />
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary2 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* --- Grid Section --- */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="col-span-full text-center py-20 text-text1"
              >
                <p className="text-xl">No projects found matching your criteria.</p>
                <button 
                  onClick={() => {setSelectedCategory(null); setSearchQuery('');}}
                  className="mt-4 text-primary2 underline hover:text-primary1"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;