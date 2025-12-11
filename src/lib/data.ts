import type { SiteConfig, NavLink, Hero, About, SkillCategory, Project, Experience, Achievement, Contact } from './types';
import placeholderImages from './placeholder-images.json';
import { Home, User, Briefcase, Shapes, MessageSquare, Code, Rss, MoreHorizontal } from 'lucide-react';

export const siteConfig: SiteConfig = {
  name: "Portfolio | swgtds",
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
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/#about", icon: User },
  { name: "Experience", href: "/#experience", icon: Briefcase },
  { name: "Skills", href: "/#skills", icon: Shapes },
  { name: "Projects", href: "/#projects", icon: Code },
  { name: "Blog", href: "/blog", icon: Rss },
  { name: "Contact", href: "/#contact", icon: MessageSquare },
];

export const mobileNavLinks: NavLink[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "Blog", href: "/blog", icon: Rss },
  { name: "Contact", href: "/#contact", icon: MessageSquare },
  { name: "More", href: "#", icon: MoreHorizontal },
];

// Additional sections that appear in the "More" menu
export const moreNavLinks: NavLink[] = [
  { name: "About", href: "/#about", icon: User },
  { name: "Experience", href: "/#experience", icon: Briefcase },
  { name: "Skills", href: "/#skills", icon: Shapes },
  { name: "Projects", href: "/#projects", icon: Code },
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

export const projects: Project[] = [
  {
    title: "Kernel",
    description: "Chat with your entire codebase, powered by a high-performance RAG engine delivering instant semantic search and rich technical insights.",
    image: {
      id: "kernel",
      description: "Kernel - RAG engine for codebases",
      imageUrl: "/projects/kernel.png",
      imageHint: "code search AI",
    },
    techStack: ["RAG", "Mastra", "NextJS", "ExpressJS", "Typescript"],
    links: {
      live: "https://k.swgtds.in",
      github: "https://github.com/swgtds/kernel",
    },
    details: {
      problem: "Developers needed a way to quickly search and understand large codebases semantically.",
      role: "Built the RAG pipeline and conversational interface for code exploration.",
      techUsed: "Mastra for AI orchestration, Next.js for the frontend, and Express.js for the backend API.",
      outcome: "Enables instant semantic search and deep technical insights for codebases.",
    },
  },
  {
  title: "Portal",
  description:
    "A fast, minimal developer portal that centralizes AI chat, rooms, and productivity tools in a single place.",
  image: {
    id: "portal",
    description: "Portal – AI chat and tools hub",
    imageUrl: "/projects/portal.png",
    imageHint: "portal dashboard with chat and tools",
  },
  techStack: ["Go", "WebSockets","React","TypeScript","LLM integration"],
  links: {
    live: "https://p.swgtds.in",
    github: "https://github.com/swgtds/portal",
  },
  details: {
    problem:
      "Developers often fragment their workflow across disparate tools for communication, AI assistance, and basic utilities, leading to context switching and reduced focus. I needed a unified, distraction-free environment that consolidated these essential workflows.",
    role:
      "Architected and engineered the complete full-stack solution. I designed the WebSocket-based real-time communication layer in Go, implemented the responsive React frontend, and integrated LLM capabilities to create a seamless, intelligent user experience.",
    techUsed:
      "Built with a robust Go backend leveraging Goroutines and WebSockets for low-latency state synchronization. The frontend is a modern React application using TypeScript, Vite, and Tailwind CSS for a performant, type-safe UI. Integrated with LLM APIs to provide context-aware AI assistance directly within the workflow.",
    outcome:
      "Delivered a highly responsive, aesthetically pleasing portal that significantly reduces friction in daily tasks. The application successfully merges real-time collaboration with personal productivity tools, all wrapped in a cohesive, developer-friendly design system.",
  },
},
  {
    title: "StumpVizz",
    description: "Ad-free, high-quality cricket live streaming platform with real-time chat and AI powered match summaries.",
    image: {
      id: "stumpvizz",
      description: "StumpVizz - Cricket streaming platform",
      imageUrl: "/projects/stumpvizz.png",
      imageHint: "cricket streaming",
    },
    techStack: ["React", "Express", "Typescript", "Custom Search Engine (CSE) Integration"],
    links: {
      live: "https://stumpvizz.vercel.app",
      github: "https://github.com/swgtds/stumpvizz",
    },
    details: {
      problem: "Cricket fans needed an ad-free streaming experience with intelligent features.",
      role: "Built the streaming platform with real-time chat and AI-powered summaries.",
      techUsed: "React and TypeScript for the frontend, Express backend, with CSE integration for content discovery.",
      outcome: "Delivers high-quality cricket streaming with real-time engagement and AI match summaries.",
    },
  },
];

export const experience: Experience[] = [
  {
    role: "Software Development Intern",
    company: "CometChat",
    period: "June 2025 - Present",
    location: "Mumbai, Maharashtra, India",
    workType: "Remote",
    logo: "https://placehold.co/32x32/212529/0ea5e9/png?text=C",
    tags: ["Langchain", "Mastra", "LLM Orchestration", "WebRTC", "ReactJS", "JavaScript"],
    description: [
      "Pioneering Agentic AI features that make chat experiences feel alive—autonomous assistants that adapt, self-orchestrate, and proactively resolve conversations at scale.",
      "Engineered seamless SDK + UI Kit integrations to supercharge real-time messaging, reducing integration friction and boosting developer velocity across multiple product lines.",
      "Designed LLM-driven routing and tool-use flows (LangChain/Mastra) that dynamically pick the right model, memory, and actions for each conversation—no manual tuning required.",
      "Optimized WebRTC signaling and presence updates for ultra-low latency interactions, pushing end-to-end message delivery to near-instantaneous on congested networks.",
      "Built experimentation hooks and observability for AI behaviors, enabling data-backed rollouts and rapid iteration on autonomous chat capabilities.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "Rocket.Chat",
    period: "February 2025 - April 2025",
    location: "Wilmington, Delaware, USA",
    workType: "Remote",
    logo: "https://placehold.co/32x32/212529/22c55e/png?text=R",
    tags: ["TypeScript", "Sequelize", "LLM Applications", "Node.js", "Webhooks"],
    description: [
      "Delivered production-grade Rocket.Chat apps with deep GitHub webhook automation—instant issue triage, PR signals, and channel-native developer workflows.",
      "Shipped FAQ and AI chat modules with smart intent detection and retrieval, turning channels into self-service knowledge hubs for fast, accurate answers.",
      "Extended TypeScript data layers and Sequelize models for cleaner, safer integrations, cutting edge cases and improving maintainability.",
      "Hardened Node.js app lifecycles, improved error boundaries, and streamlined deployment scripts for predictable releases across community servers.",
      "Collaborated across maintainers to uplift DX: better docs, clearer APIs, and sample apps that lowered the barrier to building powerful chat automations.",
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
