import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import CoverLetter from '@/components/CoverLetter';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <CoverLetter />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
