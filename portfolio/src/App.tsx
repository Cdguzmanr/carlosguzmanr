// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useScrollToTop } from './hooks/useScrollToTop';
// Pages Import
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Used to wrap all routes and apply the scroll-to-top hook since it can't be used directly in App
const PagesWrapper = () => {
    // 💡 This hook runs and forces scroll-to-top on every page transition.
    useScrollToTop(); 

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} /> 
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
};

// ---------------------------------------------

function App() {
  return (
    <BrowserRouter>
      {/* Elements inside BrowserRouter but outside Routes act like _Layout.cshtml (Navbar, Footer) */}
      <Navbar/>

      <PagesWrapper />
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;