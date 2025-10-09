import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.education': 'Educación',
    'nav.skills': 'Habilidades',
    'nav.coverLetter': 'Cover Letter',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Desarrollador de Software Fullstack',
    'hero.description': 'Apasionado por crear soluciones digitales innovadoras que combinan experiencia de usuario, rendimiento y escalabilidad.',
    'hero.viewProjects': 'Ver Proyectos',
    'hero.downloadCV': 'Descargar CV',
    
    // About
    'about.title': 'Sobre mí',
    'about.content': 'Soy un desarrollador fullstack con más de 4 años de experiencia en la creación de proyectos para la industria de seguros, landing pages y plataformas financieras. Mi enfoque combina la comprensión del usuario con el diseño funcional, asegurando soluciones útiles tanto para clientes como colaboradores.',
    
    // Experience
    'experience.title': 'Experiencia Laboral',
    'experience.current': 'Actualidad',
    'experience.job1.title': 'Desarrollador Senior Fullstack',
    'experience.job1.company': 'Grupo ASYS',
    'experience.job1.description': 'Desarrollo de aplicaciones web públicas con Angular, Python Flask y REST APIs. Liderazgo en la creación de un sistema de reclamos genérico para productos de seguros, garantizando estabilidad y escalabilidad.',
    'experience.job2.title': 'Soporte Técnico de Software',
    'experience.job2.company': 'HCL Technologies',
    'experience.job2.description': 'Atención a clientes internacionales (en inglés) para la configuración de impresoras Xerox y protocolos de red (SMTP, SFTP, drivers). Enfoque en resolución de problemas técnicos y soporte remoto efectivo.',
    
    // Projects
    'projects.title': 'Proyectos Destacados',
    'projects.viewProject': 'Ver Proyecto',
    'projects.project1.title': 'MewMoney.app',
    'projects.project1.description': 'Plataforma financiera moderna con calculadoras útiles y diseño intuitivo.',
    'projects.project1.tech': 'FlutterFlow, Firebase, UX/UI Design',
    'projects.project2.title': 'Mew Money (FlutterFlow Edition)',
    'projects.project2.description': 'Versión modular experimental de MewMoney con arquitectura escalable.',
    'projects.project2.tech': 'FlutterFlow, Firebase, Arquitectura Modular',
    'projects.project3.title': 'Shift Method GT',
    'projects.project3.description': 'Plataforma de entrenamiento virtual desarrollada durante la pandemia.',
    'projects.project3.tech': 'Web Development, Social Media Integration',
    'projects.project4.title': 'Diversi Store GT',
    'projects.project4.description': 'Tienda digital de productos inteligentes para el hogar.',
    'projects.project4.tech': 'E-commerce, Digital Marketing',
    
    // Education
    'education.title': 'Educación',
    'education.degree1.title': 'Ingeniería Industrial y en Sistemas',
    'education.degree1.institution': 'Universidad Rafael Landívar',
    'education.degree2.title': 'Bachiller en Ciencias y Letras',
    'education.degree2.institution': 'Colegio Capouilliez',
    
    // Certifications
    'certifications.title': 'Certificaciones y Cursos',
    
    // Skills
    'skills.title': 'Habilidades',
    'skills.technical': 'Habilidades Técnicas',
    'skills.soft': 'Habilidades Blandas',
    'skills.soft1': 'Pensamiento creativo',
    'skills.soft2': 'Adaptabilidad',
    'skills.soft3': 'Resolución de problemas',
    'skills.soft4': 'Autodidacta',
    
    // Cover Letter
    'coverLetter.title': 'Cover Letter',
    'coverLetter.greeting': 'Estimado reclutador,',
    'coverLetter.content': 'Soy un profesional apasionado por el desarrollo de software y la innovación tecnológica. Mi experiencia en proyectos financieros y de gran escala me ha permitido fortalecer mi enfoque en la eficiencia, escalabilidad y satisfacción del usuario. Busco contribuir a equipos que valoren la calidad, la colaboración y el crecimiento continuo.',
    'coverLetter.closing': 'Atentamente,',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.email': 'Correo',
    'contact.phone': 'Teléfono',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.coverLetter': 'Cover Letter',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Fullstack Software Developer',
    'hero.description': 'Passionate about creating innovative digital solutions that combine user experience, performance, and scalability.',
    'hero.viewProjects': 'View Projects',
    'hero.downloadCV': 'Download CV',
    
    // About
    'about.title': 'About Me',
    'about.content': 'I am a fullstack developer with over 4 years of experience creating projects for the insurance industry, landing pages, and financial platforms. My approach combines user understanding with functional design, ensuring useful solutions for both clients and collaborators.',
    
    // Experience
    'experience.title': 'Work Experience',
    'experience.current': 'Present',
    'experience.job1.title': 'Senior Fullstack Developer',
    'experience.job1.company': 'Grupo ASYS',
    'experience.job1.description': 'Development of public web applications with Angular, Python Flask, and REST APIs. Leadership in creating a generic claims system for insurance products, ensuring stability and scalability.',
    'experience.job2.title': 'Software Technical Support',
    'experience.job2.company': 'HCL Technologies',
    'experience.job2.description': 'International customer service (in English) for Xerox printer configuration and network protocols (SMTP, SFTP, drivers). Focus on technical problem solving and effective remote support.',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.viewProject': 'View Project',
    'projects.project1.title': 'MewMoney.app',
    'projects.project1.description': 'Modern financial platform with useful calculators and intuitive design.',
    'projects.project1.tech': 'FlutterFlow, Firebase, UX/UI Design',
    'projects.project2.title': 'Mew Money (FlutterFlow Edition)',
    'projects.project2.description': 'Experimental modular version of MewMoney with scalable architecture.',
    'projects.project2.tech': 'FlutterFlow, Firebase, Modular Architecture',
    'projects.project3.title': 'Shift Method GT',
    'projects.project3.description': 'Virtual training platform developed during the pandemic.',
    'projects.project3.tech': 'Web Development, Social Media Integration',
    'projects.project4.title': 'Diversi Store GT',
    'projects.project4.description': 'Digital store for smart home products.',
    'projects.project4.tech': 'E-commerce, Digital Marketing',
    
    // Education
    'education.title': 'Education',
    'education.degree1.title': 'Industrial and Systems Engineering',
    'education.degree1.institution': 'Universidad Rafael Landívar',
    'education.degree2.title': 'Bachelor of Science and Letters',
    'education.degree2.institution': 'Colegio Capouilliez',
    
    // Certifications
    'certifications.title': 'Certifications & Courses',
    
    // Skills
    'skills.title': 'Skills',
    'skills.technical': 'Technical Skills',
    'skills.soft': 'Soft Skills',
    'skills.soft1': 'Creative thinking',
    'skills.soft2': 'Adaptability',
    'skills.soft3': 'Problem solving',
    'skills.soft4': 'Self-taught',
    
    // Cover Letter
    'coverLetter.title': 'Cover Letter',
    'coverLetter.greeting': 'Dear recruiter,',
    'coverLetter.content': 'I am a professional passionate about software development and technological innovation. My experience in financial and large-scale projects has allowed me to strengthen my focus on efficiency, scalability, and user satisfaction. I seek to contribute to teams that value quality, collaboration, and continuous growth.',
    'coverLetter.closing': 'Sincerely,',
    
    // Contact
    'contact.title': 'Contact',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
