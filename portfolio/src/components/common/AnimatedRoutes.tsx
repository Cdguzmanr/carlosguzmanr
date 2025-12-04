import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, type Transition } from 'framer-motion';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import About from '../../pages/About';
import ProjectDetail from '../../pages/ProjectDetail';
import Projects from '../../pages/Projects';
import Home from '../../pages/Home';

// Define the transition properties once
const pageTransition: Transition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.35
};


const AnimatedRoutes = () => {

    const location = useLocation();
    
    useScrollToTop(); // Custom hook to scroll to top on route change

    const PageWrapper = ({ children }: { children: React.ReactNode }) => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }} 
                transition={pageTransition}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        );
    };


    return (
        <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname} > 
                
                <Route path="/" element={ <PageWrapper> <Home /> </PageWrapper>} />
                <Route path="/projects" element={<Projects />} /> 
                <Route path="/project/:slug" element={<PageWrapper> <ProjectDetail /> </PageWrapper>} />
                <Route path="/about" element={<PageWrapper> <About /> </PageWrapper>} />
            
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes