import type { SiteConfig, NavLink, Hero, About, SkillCategory, Project, Experience, Achievement, Contact } from './types';
import placeholderImages from './placeholder-images.json';
import { Home, User, Briefcase, Shapes, MessageSquare, Code, Rss } from 'lucide-react';

export const siteConfig: SiteConfig = {
  name: "Swagata Das",
  description: "A passionate Full-Stack Developer with experience in building scalable web applications using modern technologies. Let's build something amazing together.",
  url: "https://recruiter-ready.vercel.app",
  ogImage: "https://recruiter-ready.vercel.app/og-image.jpg",
  email: "swagatadas003@gmail.com",
  links: {
    github: "https://github.com/swgtds",
    linkedin: "https://linkedin.com/in/swgtds",
    x: "https://x.com/swgtds_",
    leetcode: "https://leetcode.com/u/swgtds",
    codechef: "https://www.codechef.com/users/swgtds",
    codeforces: "https://codeforces.com/profile/swgtds",
  },
};

export const navLinks: NavLink[] = [
  { name: "Home", href: "/#hero", icon: Home },
  { name: "About", href: "/#about", icon: User },
  { name: "Experience", href: "/#experience", icon: Briefcase },
  { name: "Skills", href: "/#skills", icon: Shapes },
  { name: "Projects", href: "/#projects", icon: Code },
  { name: "Blog", href: "/blog", icon: Rss },
  { name: "Contact", href: "/#contact", icon: MessageSquare },
];

export const mobileNavLinks: NavLink[] = [
  { name: "Home", href: "/#hero", icon: Home },
  { name: "Projects", href: "/#projects", icon: Code },
  { name: "Blog", href: "/blog", icon: Rss },
  { name: "Contact", href: "/#contact", icon: MessageSquare },
];


export const hero: Hero = {
  name: "Swagata Das",
  role: "AI Engineer",
  tagline: "Building web and AI solutions that make a difference.",
};

export const about: About = {
  description: "I'm Swagata Das, a dedicated Full-Stack Developer with a passion for creating efficient and scalable web applications. With expertise in both front-end and back-end technologies, I thrive on transforming ideas into functional digital solutions. My goal is to leverage technology to solve real-world problems and deliver exceptional user experiences.",
  cta: "View My Work",
};

export const skills: SkillCategory[] = [
  {
    title: "Core",
    skills: ["TypeScript", "JavaScript", "Python", "React", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Data & Cloud",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "AWS", "Docker", "Vercel"],
  },
  {
    title: "Tools",
    skills: ["Git", "Figma", "CI/CD"],
  },
];

const [project1Img, project2Img, project3Img] = placeholderImages.placeholderImages;

export const projects: Project[] = [
  {
    title: "Project One: E-commerce Platform",
    description: "A full-featured e-commerce platform with a modern, responsive design.",
    image: project1Img,
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    links: {
      live: "#",
      github: "#",
    },
    details: {
      problem: "The client needed a scalable online store to sell their products and manage inventory.",
      role: "Led the front-end development, focusing on user experience and performance.",
      techUsed: "Next.js for server-side rendering, TypeScript for type safety, and PostgreSQL for the database.",
      outcome: "Successfully launched the platform, resulting in a 40% increase in online sales within the first quarter.",
    },
  },
  {
    title: "Project Two: Real-time Chat App",
    description: "A real-time chat application for seamless communication.",
    image: project2Img,
    techStack: ["React", "Node.js", "Socket.IO", "MongoDB"],
    links: {
      live: "#",
      github: "#",
    },
    details: {
      problem: "The goal was to build a low-latency chat service for a community platform.",
      role: "Developed the back-end infrastructure and real-time data handling.",
      techUsed: "Node.js with Express, Socket.IO for WebSocket communication, and MongoDB for message storage.",
      outcome: "Achieved an average message latency of under 100ms, supporting over 1,000 concurrent users.",
    },
  },
  {
    title: "Project Three: Data Visualization Dashboard",
    description: "A dashboard for visualizing complex business intelligence data.",
    image: project3Img,
    techStack: ["React", "D3.js", "Python", "Flask"],
    links: {
      live: "#",
      github: "#",
    },
    details: {
      problem: "The company needed an internal tool to help executives visualize key performance indicators.",
      role: "Designed and implemented the interactive data visualizations and the supporting API.",
      techUsed: "React and D3.js for the front-end charts, with a Python/Flask API to serve the data.",
      outcome: "The dashboard is now a critical tool for data-driven decision-making across the company.",
    },
  },
];

export const experience: Experience[] = [
  {
    role: "Senior Full-Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    logo: "https://placehold.co/32x32/212529/5cb3b3/png?text=T",
    description: [
      "Architect and develop full-stack web applications for various clients.",
      "Mentor junior developers and lead code reviews to maintain high-quality standards.",
      "Collaborate with product managers and designers to define project requirements.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Innovate Co.",
    period: "2018 - 2020",
    logo: "https://placehold.co/32x32/212529/c48322/png?text=I",
    description: [
      "Developed and maintained front-end features for a large-scale SaaS platform.",
      "Worked on improving website performance, achieving a 20% reduction in load times.",
      "Contributed to the migration of a legacy codebase to a modern React-based stack.",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: "Certified Kubernetes Application Developer",
    description: "CKAD certification from the Cloud Native Computing Foundation.",
    year: 2022,
  },
  {
    title: "Hackathon Winner",
    description: "Won first place in the 2021 Global Tech Hackathon for building an innovative IoT solution.",
    year: 2021,
  },
];

export const contact: Contact = {
  email: "swagatadas003@gmail.com",
};
