import { motion } from "framer-motion";
import Resume from '../../assets/files/Carlos Guzman - Software Engineer.pdf';
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import { useCategoryFilterNav } from '../../hooks/useCategoryFilterNav';
// import portrait from '../../assets/images/portrait-transparent.svg';

const Hero = () => {
  const { handleFilterCategory } = useCategoryFilterNav();
  return (
    <>
        <section className='relative bg-linear-to-b from-primary1 to-night min-h-screen flex items-center justify-center overflow-hidden' >

        {/* Center Back section - portrait */}
        {/* <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] opacity-40 pointer-events-none"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
        >
          <img
            src={portrait}
            alt="Portrait of Carlos Guzman"
            className="w-full h-auto object-cover"
          />
        </motion.div> */}

        {/* Main Text */}
        <motion.div 
          className="md:w-3/4 text-neutral1 md:absolute md:bottom-26 font-bebas"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
        >

          <h1 className="text-3xl md:text-5xl lg:text-7xl leading-tight">I'M CARLOS GUZMAN.</h1>
          <h1 className="text-3xl md:text-5xl lg:text-7xl leading-tight">FULL STACK SOFTWARE ENGINEER.</h1>
          <span className='w-1/5 border-b-8 bg-neutral1 block'></span>

        </motion.div>   


        {/* Right Section */}
        <motion.div 
          className="md:w-1/4 text-neutral1 md:absolute md:right-0 top-12 mx-6"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        >

          <h2 className="font-bebas text-lg md:text-2xl leading-tight">ABOUT ME</h2>
          <p className='text-base font-caviardreams'>I'm a software developer and computer science student originally from Costa Rica, now living in Green Bay, Wisconsin. I'm curious by nature, always learning something new. Lately I've been diving into machine learning and computer vision, as part of my CS degree with emphasis in Articial Intelligence.</p>

          <h2 className="mt-12 font-bebas text-lg md:text-2xl leading-tight">MY WORK</h2>
          <p className='font-caviardreams'>My work centers on the Microsoft Development Stack including <button onClick={() => handleFilterCategory('DevOps')}>Azure DevOps</button>, <button onClick={() => handleFilterCategory('.Net')}>.NET</button>, and <button onClick={() => handleFilterCategory('SQL')}>SQL Server</button>, across both front-end and back-end. I also have experience in UX design, public speaking, and consulting for small projects and non-profit organizations.</p>

          <div className="mt-12 flex flex-col md:flex-row gap-8 py-3 items-center">
            
            
            <a href={Resume} target="_blank" className="group font-bebas text-lg md:text-2xl">
              DOWNLOAD RESUME
              <span className='w-1/3 group-hover:w-full transition-all duration-300 border-b-4 bg-neutral1 block'></span>
            </a>
            
            <div className="flex gap-8 text-3xl">
              <a href="https://www.linkedin.com/in/carlosd-guzman/" target="_blank" rel="noopener noreferrer" className='hover:scale-125'>
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/Cdguzmanr" target="_blank" rel="noopener noreferrer" className='hover:scale-125'>
                <AiFillGithub />
              </a>
            </div>
          </div>

        </motion.div>

        </section>
    </>
  )
}

export default Hero