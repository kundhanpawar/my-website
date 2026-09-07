export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & Data Science' | 'IoT & Hardware';
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  stats: { label: string; value: string }[];
  githubUrl: string;
  demoType: 'analytics' | 'iot-light';
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  color: 'cyan' | 'violet' | 'emerald' | 'amber';
  skills: {
    name: string;
    level: string;
    highlight: string;
    experience: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  skillsLearned: string[];
  accentColor: 'cyan' | 'violet' | 'emerald';
  badgeIcon: string;
}

export interface Mascot {
  id: 'byte' | 'sparky' | 'pointer';
  name: string;
  title: string;
  species: string;
  avatarColor: string;
  personality: string;
  sectionQuotes: {
    hero: string;
    about: string;
    skills: string;
    projects: string;
    certifications: string;
    contact: string;
  };
  randomJokes: string[];
}
