import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Collaborations from './components/Collaborations';
import Partnership from './components/Partnership';
import Events from './components/Events';
import TopVoice from './components/TopVoice';
import TeamStructure from './components/TeamStructure';
import StaffRecruitment from './components/StaffRecruitment';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './styles/animations.css';

function App() {
  useEffect(() => {
    document.title = 'Kaze Serenity - Join Our Discord Community';
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200"
        >
          <Navbar />
          <Hero />
          <About />
          <Collaborations />
          <Partnership />
          <Events />
          <TopVoice />
          <TeamStructure />
          <StaffRecruitment />
          <CTA />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;