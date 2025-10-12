import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import Section from './Section';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const { t } = useLanguage();

  const contacts = [
    {
      icon: Mail,
      labelKey: 'contact.email',
      value: 'ajcaceres6@gmail.com',
      link: 'mailto:ajcaceres6@gmail.com',
    },
    {
      icon: Phone,
      labelKey: 'contact.phone',
      value: '+502 5829-5534',
      link: 'tel:+50258295534',
    },
    {
      icon: Linkedin,
      labelKey: 'contact.linkedin',
      value: 'LinkedIn Profile',
      link: 'https://linkedin.com',
    },
    {
      icon: Github,
      labelKey: 'contact.github',
      value: 'github.com/AJCaceres',
      link: 'https://github.com/AJCaceres',
    },
  ];

  return (
    <Section id="contact" titleKey="contact.title" icon={<Mail className="h-8 w-8 text-primary" />} maxWidth="max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="glass-card p-6 animate-fade-in hover:scale-105 transition-transform"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/20 text-primary">
                <contact.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{t(contact.labelKey)}</h3>
                <Button
                  variant="link"
                  className="p-0 h-auto text-muted-foreground hover:text-primary"
                  onClick={() => window.open(contact.link, '_blank')}
                >
                  {contact.value}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Contact;
