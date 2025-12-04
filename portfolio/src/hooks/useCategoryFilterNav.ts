/**
 * Use Instructions:
 * 1. Import the hook in your component:
 *    import { useCategoryFilterNav } from '../hooks/useCategoryFilterNav';
 * 2. Call the hook to get the functions:
 *    const { handleFilterCategory, handleClearCategoryFilter } = useCategoryFilterNav();
 * 3. Use the functions as needed, e.g.:
 *    <button onClick={() => handleFilterCategory('C#')}>Filter by C#</button>
 */





import { useNavigate, useSearchParams } from 'react-router-dom';

/**
 * Custom hook to encapsulate the logic for filtering projects by category 
 * and navigating to the updated URL.
 */
export const useCategoryFilterNav = () => {
  const navigate = useNavigate();
  const [, setSearchParams] = useSearchParams(); // Destructure only the setter

  /**
   * Navigates to the /projects page and sets the 'category' query parameter,
   * ensuring that special characters are properly encoded.
   * @param category The category string to filter by (e.g., "C#", ".NET").
   */
  const handleFilterCategory = (category: string) => {
    // 1. Encode the category for safety (e.g., C# -> C%23)
    const encodedCategory = encodeURIComponent(category); 
    
    // 2. Navigate to the projects page with the encoded query parameter.
    // We use navigate instead of setSearchParams directly to ensure we land 
    // on the /projects route first, in case the user clicks this from Home.
    navigate(`/projects?category=${encodedCategory}`);
  };

  /**
   * Clears the 'category' filter from the URL and navigates to /projects.
   */
  const handleClearCategoryFilter = () => {
    navigate('/projects');
    setSearchParams({}); // Clear any residual params if navigating from another route
  };


  return { 
    handleFilterCategory,
    handleClearCategoryFilter
  };
};