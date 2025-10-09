import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.experience', href: '#experience' },
    { key: 'nav.projects', href: '#projects' },
    { key: 'nav.education', href: '#education' },
    { key: 'nav.skills', href: '#skills' },
    { key: 'nav.coverLetter', href: '#cover-letter' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="glass-card px-4 py-2 font-bold text-lg">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AC
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 transition-all duration-200"
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* Language Switcher */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="glass-card hover:bg-white/10"
          >
            <Globe className="mr-2 h-4 w-4" />
            {language.toUpperCase()}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
