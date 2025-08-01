import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppTheme } from './ThemeContext'; // ✅ add at the top
import { useTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import './index.css';
// Import all the pages
import Home from './pages/Home';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import TermsAndConditions from './pages/TermsAndConditions';
import CancellationRefund from './pages/CancellationRefund';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import WebsiteDesign from './pages/WebsiteDesign';
import SeoOptimization from './pages/SeoOptimization';
import GraphicDesign from './pages/GraphicDesign';
import DigitalMarketing from './pages/DigitalMarketing';
import Androidapp from './pages/Androidapp';
import EcommerceWeb from './pages/EcommerceWeb';

function App() {
  const theme = useTheme();
  const { toggleTheme, mode } = useAppTheme(); 
  const isDark = theme.palette.mode === 'dark';
  return (
    <>
    <Box
    sx={{
      bgcolor: isDark ? '#000000ff' : '#ffffff',
      color: isDark ? '#fff' : '#000',
      minHeight: '100vh',
    }}
  >
    <CssBaseline />
    <Router>
       <Navbar toggleTheme={toggleTheme} mode={mode}/> {/* ✅ pass props */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/portfolio" element={<Portfolio />} />
 
        {/* Services Pages */}

        <Route path="/website-designing" element={<WebsiteDesign />} />
        <Route path="/seo-optimization" element={<SeoOptimization />} />
        <Route path="/ecommerce-website" element={<EcommerceWeb />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/android-app-development" element={<Androidapp />} />
        <Route path="/graphic-designing" element={<GraphicDesign />} />

        {/* Footer Pages  */}
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
        <Route path="/cancellation-and-refund" element={<CancellationRefund/>}/>
      </Routes>
      <Footer/>
    </Router>
    </Box>
    </>
  );
}

export default App;
