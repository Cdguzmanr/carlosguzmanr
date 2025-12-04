// src/App.tsx
import { BrowserRouter} from 'react-router-dom';
import AnimatedRoutes from './components/common/AnimatedRoutes';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


// ---------------------------------------------

function App() {
    return (
        <BrowserRouter>
            <Navbar/>

            <AnimatedRoutes />
            
            <Footer/>
        </BrowserRouter>
    );
}

export default App;