import React, { ReactNode } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SectionProps {
  id?: string;
  titleKey: string;
  icon?: ReactNode;
  children: ReactNode;
  maxWidth?: string; // tailwind max-w- class, e.g. 'max-w-4xl'
}

const Section = ({ id, titleKey, icon, children, maxWidth = 'max-w-5xl' }: SectionProps) => {
  const { t } = useLanguage();

  return (
    <section id={id} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className={`${maxWidth} mx-auto`}>
          <div className="flex items-center gap-3 mb-12">
            {icon}
            <h2 className="text-3xl md:text-4xl font-bold">{t(titleKey)}</h2>
          </div>

          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
