import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { Resume, navItems } from '../../data/constants';
import HoverLink from '../common/HoverLink';

// Placeholder for your resume file path (or import it if you have it locally)
// const Resume = "/path-to-your-resume.pdf"; 
// Placeholder for your logo
const LogoUrl = "https://placehold.co/50x50/E5DED6/003F1C?text=CG";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 1. SCROLL LOCK LOGIC
  // When the menu is open, we prevent the body from scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset overflow if component unmounts
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Helper to close menu when a link is clicked
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary1 text-neutral1 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* --- LEFT SECTION: Logo & Name --- */}
          <div className="flex items-center gap-4 z-50">
            <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3">
              <img 
                src={LogoUrl} 
                alt="Carlos Guzman Logo" 
                className="h-10 w-10 rounded-full object-cover border-2 border-neutral1"
              />
              <span className="font-bebas text-3xl tracking-wide">
                Carlos Guzman
              </span>
            </Link>
          </div>

          {/* --- DESKTOP MENU (Hidden on Mobile) --- */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-xl font-caviardreams">
            <HoverLink to="/" name="Home" className="text-neutral1" />
            <HoverLink to="/projects" name="Projects" className="text-neutral1" />
            <HoverLink to="/about" name="About" className="text-neutral1" />
          </div>

          {/* --- MOBILE MENU BUTTON (Sandwich/Hamburger) --- */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-neutral1 p-2"
              aria-label="Toggle Menu"
            >
              <div className="w-8 h-6 flex flex-col justify-between relative">
                {/* Line 1: Rotates 45deg to form one half of X */}
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ease-in-out 
                  ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} 
                />
                {/* Line 2: Fades out */}
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ease-in-out 
                  ${isOpen ? 'opacity-0' : 'opacity-100'}`} 
                />
                {/* Line 3: Rotates -45deg to form other half of X */}
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ease-in-out 
                  ${isOpen ? '-rotate-45 -translate-y-3' : ''}`} 
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE FULL SCREEN OVERLAY --- */}
      {/* We use conditional CSS classes to animate the height/opacity */}
      <div 
        className={`fixed inset-0 bg-linear-to-b from-primary1 to-night z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        
        {/* CENTER: Navigation Links */}
        <div className="flex flex-col items-center gap-8 mb-12">
          
          {navItems.map((item, index) => (
            <Link to={item.href} key={index} onClick={handleLinkClick} className="font-bebas text-5xl text-neutral1 hover:text-primary2 transition-colors tracking-wider">
              {item.label}
            </Link>
          ))}

        </div>

        {/* BOTTOM: Resume & Socials (Your provided code integrated) */}
        <div className="absolute bottom-10 flex flex-col items-center gap-6 w-full px-6">
          {/* Resume Button */}
          <a href={Resume} target="_blank" rel="noreferrer" className="group font-bebas text-2xl text-neutral1 tracking-widest">
            DOWNLOAD RESUME
            <span className='w-1/3 group-hover:w-full transition-all duration-300 h-0.5 bg-primary2 block mt-1 mx-auto'></span>
          </a>

          {/* Social Icons */}
          <div className="flex gap-8 text-4xl text-neutral1">
            <a href="https://www.linkedin.com/in/carlosd-guzman/" target="_blank" rel="noopener noreferrer" className='hover:text-primary2 hover:scale-110 transition-all'>
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Cdguzmanr" target="_blank" rel="noopener noreferrer" className='hover:text-primary2 hover:scale-110 transition-all'>
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;