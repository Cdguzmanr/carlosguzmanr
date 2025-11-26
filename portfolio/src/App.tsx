// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages Import
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <BrowserRouter>
      {/* Elements inside BrowserRouter but outside Routes act like _Layout.cshtml (Navbar, Footer) */}
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;