import { ArrowDown, Download, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-50 animate-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Main content */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-slide-up">
              Alvaro Cáceres
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-muted-foreground mb-6">
              {t('hero.title')}
            </h2>
          </div>

          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="glass-card bg-primary/20 hover:bg-primary/30 border-primary/30 text-primary-foreground group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Briefcase className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              {t('hero.viewProjects')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-card hover:bg-white/10"
              asChild
            >
              <a href="/CV_AJ_2025_ESP.pdf" download="CV_Alvaro_Caceres.pdf">
                <Download className="mr-2 h-5 w-5" />
                {t('hero.downloadCV')}
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
