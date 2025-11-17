// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      {/* Elements inside BrowserRouter but outside Routes act like _Layout.cshtml (Navbar, Footer) */}
      <nav>My Navbar</nav> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      <footer>My Footer</footer>
    </BrowserRouter>
  );
}

export default App;