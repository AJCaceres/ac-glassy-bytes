import { ExternalLink, Folder, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      titleKey: 'projects.project1.title',
      descriptionKey: 'projects.project1.description',
      techKey: 'projects.project1.tech',
      link: 'https://mewmoney.app',
      linkType: 'website',
    },
    {
      titleKey: 'projects.project2.title',
      descriptionKey: 'projects.project2.description',
      techKey: 'projects.project2.tech',
      link: 'https://mew-money.flutterflow.app',
      linkType: 'website',
    },
    {
      titleKey: 'projects.project3.title',
      descriptionKey: 'projects.project3.description',
      techKey: 'projects.project3.tech',
      link: 'https://instagram.com/shiftmethodgt',
      linkType: 'instagram',
    },
    {
      titleKey: 'projects.project4.title',
      descriptionKey: 'projects.project4.description',
      techKey: 'projects.project4.tech',
      link: 'https://instagram.com/diversistoregt',
      linkType: 'instagram',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Folder className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">{t('projects.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card p-6 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {t(project.titleKey)}
                </h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {t(project.descriptionKey)}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {t(project.techKey)}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-white/10 hover:text-primary"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  {project.linkType === 'instagram' ? (
                    <>
                      <Instagram className="mr-2 h-4 w-4" />
                      Instagram
                    </>
                  ) : (
                    <>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t('projects.viewProject')}
                    </>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
