import { Briefcase, Calendar } from 'lucide-react';
import Section from './Section';
import { useLanguage } from '@/contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      titleKey: 'experience.job1.title',
      companyKey: 'experience.job1.company',
      descriptionKey: 'experience.job1.description',
      period: '2021',
      current: true,
    },
    {
      titleKey: 'experience.job2.title',
      companyKey: 'experience.job2.company',
      descriptionKey: 'experience.job2.description',
      period: '2019 - 2021',
      current: false,
    },
  ];

  return (
    <Section id="experience" titleKey="experience.title" icon={<Briefcase className="h-8 w-8 text-primary" />} maxWidth="max-w-4xl">
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="glass-card p-6 md:p-8 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-1">
                  {t(exp.titleKey)}
                </h3>
                <p className="text-lg text-foreground/80">{t(exp.companyKey)}</p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                <Calendar className="h-4 w-4" />
                <span>
                  {exp.period} - {exp.current && t('experience.current')}
                </span>
              </div>
            </div>
            <p className="text-foreground/80 leading-relaxed">{t(exp.descriptionKey)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
