import type { LucideIcon } from 'lucide-react';

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
    x: string;
    leetcode: string;
    codechef: string;
    codeforces: string;
  };
};

export type NavLink = {
  name: string;
  href: string;
  icon: LucideIcon | ((props: React.SVGProps<SVGSVGElement>) => JSX.Element);
};

export type Hero = {
  name: string;
  role: string;
  tagline: string;
};

export type About = {
  description: string;
  cta: string;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type ProjectImage = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export type Project = {
  title:string;
  description: string;
  image: ProjectImage;
  techStack: string[];
  links: {
    live: string;
    github: string;
  };
  details: {
    problem: string;
    role: string;
    techUsed: string;
    outcome: string;
  };
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string[];
  logo?: string;
};

export type Achievement = {
  title: string;
  description: string;
  year: number;
};

export type Contact = {
  email: string;
};
