// src/hooks/useCategoryFilterNav.ts (Updated Snippet)
import { useNavigate, useSearchParams } from 'react-router-dom';

export const useCategoryFilterNav = () => {
  const navigate = useNavigate();
  // Get the setter function from useSearchParams
  const [searchParams, setSearchParams] = useSearchParams(); 

  /**
   * Updates the 'category' query parameter without triggering a full page navigation 
   * or refresh if the current page is already /projects.
   * @param category The category string to filter by.
   */
  const handleFilterCategory = (category: string) => {
    const currentPath = location.pathname;

    if (currentPath.startsWith('/projects')) {
        // 💡 FIX: Use setSearchParams to update the query string non-destructively.
        // This ONLY updates the URL query, NOT the route, preventing the 'jump'.
        const encodedCategory = encodeURIComponent(category);
        setSearchParams({ category: encodedCategory });
    } else {
        // If the user is on another page (e.g., Home), navigate them to Projects
        const encodedCategory = encodeURIComponent(category); 
        navigate(`/projects?category=${encodedCategory}`);
    }
  };

  /**
   * Clears the 'category' filter from the URL.
   */
  const handleClearCategoryFilter = () => {
    // If we're on the projects page, simply clear the parameter
    if (location.pathname.startsWith('/projects')) {
        setSearchParams({}); 
    } else {
        // Navigate to the clean projects route otherwise
        navigate('/projects');
    }
  };

  return { 
    handleFilterCategory,
    handleClearCategoryFilter,
    // Optional: expose current category for highlighting/logic
    currentCategory: searchParams.get('category') 
  };
};