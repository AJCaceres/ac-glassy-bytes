import { Mail } from 'lucide-react';
import Section from './Section';
import { useLanguage } from '@/contexts/LanguageContext';

const CoverLetter = () => {
  const { t } = useLanguage();

  return (
    <Section id="cover-letter" titleKey="coverLetter.title" icon={<Mail className="h-8 w-8 text-primary" />} maxWidth="max-w-4xl">
      <div className="glass-card p-8 md:p-10 animate-fade-in">
        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p className="text-lg">{t('coverLetter.greeting')}</p>
          <p className="text-lg">{t('coverLetter.content')}</p>
          <div className="pt-4">
            <p className="text-lg mb-2">{t('coverLetter.closing')}</p>
            <p className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Alvaro Cáceres
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CoverLetter;
