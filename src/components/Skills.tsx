import { Code, Sparkles } from 'lucide-react';
import Section from './Section';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const technicalSkills = [
    { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'R', 'Kotlin'] },
    { category: 'Frameworks', items: ['Angular', 'React', 'Flask', 'Express'] },
    { category: 'Tools', items: ['Git', 'Firebase', 'Bootstrap', 'CSS', 'HTML5', 'Tableau'] },
    { category: 'Methodologies', items: ['SCRUM', 'CI/CD', 'UX/UI Design'] },
  ];

  const softSkills = ['skills.soft1', 'skills.soft2', 'skills.soft3', 'skills.soft4'];

  return (
    <Section id="skills" titleKey="skills.title" icon={<Code className="h-8 w-8 text-primary" />} maxWidth="max-w-4xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Technical Skills */}
        <div className="glass-card p-8 animate-fade-in">
          <h3 className="text-2xl font-semibold text-primary mb-6">{t('skills.technical')}</h3>
          <div className="space-y-6">
            {technicalSkills.map((skill, index) => (
              <div key={index}>
                <h4 className="text-lg font-medium text-foreground/90 mb-3">{skill.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm border border-primary/30 hover:bg-primary/30 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h3 className="text-2xl font-semibold text-secondary mb-6 flex items-center gap-2">
            <Sparkles className="h-6 w-6" />
            {t('skills.soft')}
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 transition-colors"
              >
                <p className="text-foreground/90 font-medium">{t(skill)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
