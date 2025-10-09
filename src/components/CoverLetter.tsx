import { Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CoverLetter = () => {
  const { t } = useLanguage();

  return (
    <section id="cover-letter" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Mail className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">{t('coverLetter.title')}</h2>
          </div>

          <div className="glass-card p-8 md:p-10 animate-fade-in">
            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <p className="text-lg">{t('coverLetter.greeting')}</p>
              <p className="text-lg">{t('coverLetter.content')}</p>
              <div className="pt-4">
                <p className="text-lg mb-2">{t('coverLetter.closing')}</p>
                <p className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Álvaro Cáceres
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverLetter;
