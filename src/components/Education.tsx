import { GraduationCap, Award } from 'lucide-react';
import Section from './Section';
import { useLanguage } from '@/contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      titleKey: 'education.degree1.title',
      institutionKey: 'education.degree1.institution',
      period: '2016 - 2022',
    },
    {
      titleKey: 'education.degree2.title',
      institutionKey: 'education.degree2.institution',
      period: '2000 - 2015',
    },
  ];

  const certifications = [
    { name: 'React, MERN y Hooks', provider: 'Udemy', year: '2024' },
    { name: 'Node.js', provider: 'Udemy', year: '2024' },
    { name: 'SCRUM Fundamentals', provider: 'SCRUMstudy / ESI School', year: '2023' },
    { name: 'Solidity', provider: 'ETH Kipu, UVG', year: '2023' },
    { name: 'Kotlin & Android Studio', provider: 'Pirple', year: '2021' },
    { name: 'Python', provider: 'Coursera', year: '2021' },
  ];

  return (
    <Section id="education" titleKey="education.title" icon={<GraduationCap className="h-8 w-8 text-primary" />} maxWidth="max-w-4xl">
      {/* Education */}
      <div className="mb-16">
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card p-6 md:p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{t(edu.titleKey)}</h3>
              <p className="text-lg text-foreground/80 mb-1">{t(edu.institutionKey)}</p>
              <p className="text-muted-foreground">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <Award className="h-8 w-8 text-secondary" />
          <h2 className="text-3xl md:text-4xl font-bold">{t('certifications.title')}</h2>
        </div>

        <div className="glass-card p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <h4 className="font-medium text-foreground mb-1">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.provider} • {cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
