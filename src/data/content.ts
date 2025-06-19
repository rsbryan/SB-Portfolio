import { Project, Experience, Contact, PerformanceStats, StatusInfo } from '../types';

export const aboutMe = {
  intro: "I'm a Computer Science student at San Diego State University with a passion for creating innovative software solutions. Currently working as a Software Engineer at Digital Innovation Lab, I specialize in full-stack web development and machine learning applications.",
  experience: "My experience spans from developing custom domain-specific languages for ML automation to building production web applications serving hundreds of users. I thrive on solving complex problems and turning ideas into reality through code.",
  learning: "When I'm not coding, you'll find me exploring the latest technologies, contributing to open-source projects, or leading renovation projects at my fraternity. I believe in continuous learning and pushing the boundaries of what's possible with technology.",
  lifestyle: "Outside of programming, I maintain an active lifestyle through surfing, rock climbing, golf, and triathlons. I also run a business automation service company and conduct research in emerging technologies."
};

export const projects: Project[] = [
  {
    id: 'modelscript',
    title: 'ModelScript',
    description: 'ML Domain Specific Language',
    details: [
      'Custom DSL compiler automating ML model creation from declarative syntax',
      'Lexical parser using regex to transpile .ms files into TensorFlow/Keras code',
      'Supports CNN, RNN, bidirectional architectures for MNIST and NLP tasks',
      'CLI tool reducing model prototyping time by 80%'
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'Regex', 'CLI', 'Compiler Design'],
    github: 'https://github.com/rsbryan/ModelScript',
    featured: true,
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'swiftsheet',
    title: 'Swiftsheet',
    description: 'NFC Menu Platform',
    details: [
      'Full-stack Next.js app for NFC-linked restaurant digital menus',
      'Supabase authentication, cloud storage, Stripe payments integration',
      'TypeScript for type safety, responsive PDF upload and editing UI',
      'Serving 200+ restaurants with 99.9% uptime'
    ],
    technologies: ['Next.js', 'Supabase', 'Stripe', 'TypeScript', 'NFC', 'PostgreSQL'],
    github: 'https://github.com/rsbryan/SwiftSheet',
    featured: true,
    image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
];

export const experience: Experience[] = [
  {
    id: 'digital-innovation',
    title: 'Software Engineer',
    company: 'Digital Innovation Lab',
    period: 'Feb 2025 – Present',
    description: [
      'Built 2 client web apps using React, Node.js, PostgreSQL serving 100+ daily users',
      'Developed RESTful APIs with Express.js and Auth0 authentication',
      'Implemented CI/CD pipelines with GitHub Actions, reducing deployment time by 200%',
      'Managed AWS infrastructure (EC2, S3, RDS) maintaining 99.8% uptime'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'GitHub Actions'],
  },
  {
    id: 'fathomwerx',
    title: 'Engineering Intern',
    company: 'FATHOMWERX Defense R&D Lab',
    period: 'Mar 2023 – Sep 2023',
    description: [
      'Developed Python automation scripts for data analysis, improving workflow efficiency by 40%',
      'Built secure data pipelines using PostgreSQL and pandas for experimental data processing',
      'Created REST API endpoints for internal systems requiring security clearance'
    ],
    technologies: ['Python', 'PostgreSQL', 'Pandas', 'REST APIs', 'Data Analysis'],
  },
];

export const skills = {
  languages: ['Python', 'C++', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'HTML/CSS'],
  libraries: ['Pandas', 'NumPy', 'TensorFlow', 'Keras', 'Matplotlib', 'Asyncio'],
  infrastructure: ['AWS (EC2, S3, CLI)', 'Git', 'PostgreSQL', 'Kafka', 'Docker', 'REST/FIX APIs'],
  frameworks: ['Flask', 'Node.js', 'React', 'Next.js'],
};

export const contact: Contact = {
  location: 'San Diego, CA',
  email: 'sbryancs@gmail.com',
  phone: '(805) 607-3805',
  github: 'https://github.com/rsbryan',
  linkedin: 'https://www.linkedin.com/in/stevenbryan-/',
};

export const performanceStats: PerformanceStats = {
  bundleSize: '142kb',
  loadTime: '0.8s',
  lighthouseScore: 98,
  framework: 'React + TypeScript',
  uptime: '99.9%'
};

export const statusInfo: StatusInfo = {
  location: 'La Jolla',
  weather: '☀️',
  temperature: '72°F',
  activity: 'Coding'
};