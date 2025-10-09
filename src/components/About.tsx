import { User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <User className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">{t('about.title')}</h2>
          </div>

          <div className="glass-card p-8 md:p-10 animate-fade-in">
            <p className="text-lg text-foreground/90 leading-relaxed">
              {t('about.content')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
