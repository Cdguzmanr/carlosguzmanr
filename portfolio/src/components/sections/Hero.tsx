import React from 'react'
import { scrollToElement } from '../../utils/scrollToElement'; // adjust path as needed
import { motion } from "framer-motion";
import { Resume } from '../../data/constants';
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";

const Hero = () => {
  return (
    <>
        <section className='relative bg-linear-to-b from-primary1 to-night min-h-screen flex items-center justify-center overflow-hidden' >

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
          <p className='text-base font-caviardreams'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptatem enim repudiandae ipsam quo voluptates recusandae asperiores.</p>

          <h2 className="mt-12 font-bebas text-lg md:text-2xl leading-tight">MY WORK</h2>
          <p className='font-caviardreams'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore ab doloribus laudantium, officiis corrupti doloremque animi fugit.</p>

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