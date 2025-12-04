import { motion } from "framer-motion";
import Resume from '../../assets/files/Carlos Guzman - Software Engineer.pdf';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useCategoryFilterNav } from '../../hooks/useCategoryFilterNav';

const Hero = () => {
  const { handleFilterCategory } = useCategoryFilterNav();

  return (
    <section className='relative bg-linear-to-b from-primary1 to-night min-h-screen w-full flex flex-col lg:flex-row px-6 py-12 lg:px-16 overflow-hidden'>
      
      {/* --- LEFT SECTION (Name) --- 
        Desktop: Takes up 60% of width, pushes content to the bottom (justify-end).
        Mobile: Stacks on top (order-1), centered vertically.
      */}
      <motion.div
        className="w-full lg:w-3/5 flex flex-col justify-center lg:justify-end items-start text-neutral1 font-bebas z-10 lg:pb-24 order-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-wide mb-4">
          I'M CARLOS GUZMAN.
        </h1>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] text-primary2/90">
          FULL STACK SOFTWARE ENGINEER.
        </h1>
        <span className='w-24 lg:w-1/4 border-b-8 bg-neutral1 block mt-6'></span>
      </motion.div>


      {/* --- RIGHT SECTION (About & Work) ---
        Desktop: Takes up 40% of width, pushes content to the top (justify-start).
        Mobile: Stacks below (order-2), with margin top for spacing.
      */}
      <motion.div
        className="w-full lg:w-2/5 flex flex-col justify-start items-start text-neutral1 z-10 mt-12 lg:mt-0 lg:pt-20 lg:pl-12 order-2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        
        {/* About Me Block */}
        <div className="mb-10">
          <h2 className="font-bebas text-2xl md:text-3xl mb-3 tracking-wide text-primary2">ABOUT ME</h2>
          <p className='text-base md:text-lg font-caviardreams leading-relaxed text-neutral1/90'>
            I'm a software developer and computer science student originally from Costa Rica, now living in Green Bay, Wisconsin. I'm curious by nature, always learning something new. Lately I've been diving into machine learning and computer vision as part of my CS degree with an emphasis in Artificial Intelligence.
          </p>
        </div>

        {/* Work Block */}
        <div>
          <h2 className="font-bebas text-2xl md:text-3xl mb-3 tracking-wide text-primary2">MY WORK</h2>
          <p className='text-base md:text-lg font-caviardreams leading-relaxed text-neutral1/90'>
            My work centers on the Microsoft Development Stack including{' '}
            <button onClick={() => handleFilterCategory('DevOps')} className="underline decoration-primary2 hover:text-primary2 transition-colors">Azure DevOps</button>,{' '}
            <button onClick={() => handleFilterCategory('.Net')} className="underline decoration-primary2 hover:text-primary2 transition-colors">.NET</button>, and{' '}
            <button onClick={() => handleFilterCategory('SQL')} className="underline decoration-primary2 hover:text-primary2 transition-colors">SQL Server</button>, 
            across both front-end and back-end. I also have experience in UX design, public speaking, and consulting.
          </p>
        </div>

        {/* Buttons & Socials */}
        <div className="mt-10 flex flex-col sm:flex-row gap-8 items-start sm:items-center w-full">
          <a href={Resume} target="_blank" rel="noreferrer" className="group font-bebas text-xl tracking-wider">
            DOWNLOAD RESUME
            <span className='w-1/3 group-hover:w-full transition-all duration-300 border-b-4 bg-primary2 block mt-1'></span>
          </a>

          <div className="flex gap-6 text-3xl">
            <a href="https://www.linkedin.com/in/carlosd-guzman/" target="_blank" rel="noopener noreferrer" className='hover:text-primary2 hover:scale-110 transition-all'>
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Cdguzmanr" target="_blank" rel="noopener noreferrer" className='hover:text-primary2 hover:scale-110 transition-all'>
              <AiFillGithub />
            </a>
          </div>
        </div>

      </motion.div>
    </section>
  )
}

export default Hero;