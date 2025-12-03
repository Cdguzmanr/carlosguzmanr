import React, { useRef, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { FaBookReader } from "react-icons/fa";
import { blogsData } from "../../data/blogsData";
// import ImageCarousel from "../common/ImageCarousel"; // Uncomment when you migrate your carousel

const BlogSection: React.FC = () => {
  const visibleBlogs = blogsData.filter((blog) => blog.display);
  const [activeBlogId, setActiveBlogId] = useState<number>(visibleBlogs[0]?.id || 0);

  // We use a Map to store refs to multiple blog sections
  const sectionRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  // --- Scroll Spy Logic (Highlight sidebar on scroll) ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for sticky navbar

      // Find the current section
      for (const blog of visibleBlogs) {
        const element = sectionRefs.current.get(blog.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveBlogId(blog.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleBlogs]);


  // --- Smooth Scroll Handler ---
  const scrollToBlog = (id: number) => {
    const element = sectionRefs.current.get(id);
    if (element) {
      // 80px offset for the fixed Navbar
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="pb-24 bg-neutral2 text-text1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 md:flex md:flex-row gap-8">
        
        {/* --- LEFT SIDEBAR (Sticky Navigation) --- */}
        <aside className="w-full md:w-1/4 mb-8 md:mb-0">
          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 md:sticky md:top-24 overflow-hidden">
            <div className="px-5 py-4 border-b border-neutral-100 bg-gray-50">
              <p className="font-bebas text-xl text-primary1 tracking-wide">Story List</p>
            </div>
            
            <nav className="max-h-[60vh] overflow-y-auto custom-scrollbar">
              <ul>
                {visibleBlogs.map((blog) => (
                  <li key={blog.id}>
                    <button
                      onClick={() => scrollToBlog(blog.id)}
                      className={`w-full text-left px-5 py-3 transition-all duration-200 flex items-center gap-3 text-sm font-medium border-l-4
                        ${activeBlogId === blog.id 
                          ? "bg-primary1/10 text-primary1 border-primary1" 
                          : "text-text2 border-transparent hover:bg-gray-50 hover:text-primary1"
                        }`}
                    >
                      <FaBookReader className={activeBlogId === blog.id ? "text-primary1" : "text-gray-400"} />
                      <span className="line-clamp-1">{blog.short}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>


        {/* --- RIGHT CONTENT (Stories) --- */}
        <main className="w-full md:w-3/4">
          
          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-100 bg-gray-50">
              <h3 className="text-xl font-bebas text-center text-primary1 tracking-wide">My Stories</h3>
            </div>
            
            <div className="p-6 md:p-8 space-y-12">
              {visibleBlogs.map((blog, index) => (
                <article
                  key={blog.id}
                  ref={(el) => {
                    if (el) sectionRefs.current.set(blog.id, el as HTMLDivElement);
                  }}
                  className={`scroll-mt-32 ${index !== visibleBlogs.length - 1 ? 'border-b border-neutral-100 pb-12' : ''}`}
                >
                  <h3 className="text-2xl font-bold text-primary1 mb-6">
                    {blog.title}
                  </h3>

                  {/* Image Carousel Placeholder */}
                  {/* {blog.images && blog.images.length > 0 && (
                    <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                       <ImageCarousel imagesUrl={blog.images} /> 
                       <img src={blog.images[0]} alt={blog.title} className="w-full object-cover" />
                    </div>
                  )} */}

                  {/* Markdown Content */}
                  <div className="markdown prose prose-lg max-w-none text-text1 prose-headings:font-bebas prose-headings:text-primary1 prose-a:text-primary2 prose-strong:text-primary1">
                    <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                      {blog.body}
                    </ReactMarkdown>
                  </div>

                  {/* Related Links */}
                  {blog.links && blog.links.length > 0 && (
                    <div className="mt-8 bg-neutral2/30 rounded-lg p-4">
                      <h4 className="font-bebas text-lg text-text1 mb-3">Related Links</h4>
                      <div className="grid gap-3">
                        {blog.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-3 bg-white rounded-md border border-neutral-200 hover:border-primary2 hover:shadow-md transition-all group"
                          >
                            {link.image && (
                              <img
                                src={link.image}
                                alt={link.title}
                                className="w-16 h-12 object-contain rounded border border-neutral-100"
                              />
                            )}
                            <div>
                              <p className="font-bold text-sm text-primary1 group-hover:text-primary2 transition-colors">
                                {link.title}
                              </p>
                              <p className="text-xs text-gray-500">
                                {new URL(link.url).hostname.replace(/^www\./, '')}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>

          <div className="text-center mt-10 text-gray-400 text-sm italic">
            I'm just getting started — more stories about my awards, international events, and life-changing experiences are coming soon. Stay tuned!
          </div>

        </main>
      </div>
    </div>
  );
};

export default BlogSection;