import { User } from 'lucide-react';
import Section from './Section';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <Section id="about" titleKey="about.title" icon={<User className="h-8 w-8 text-primary" />} maxWidth="max-w-4xl">
      <div className="glass-card p-8 md:p-10 animate-fade-in">
        <p className="text-lg text-foreground/90 leading-relaxed">{t('about.content')}</p>
      </div>
    </Section>
  );
};

export default About;
