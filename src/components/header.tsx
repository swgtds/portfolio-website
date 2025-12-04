
'use client';

import Link from 'next/link';

import { siteConfig, navLinks } from '@/lib/data';
import { ThemeToggle } from './theme-toggle';
import { SocialLinks } from './social-links';

export default function Header() {

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold text-primary">
          {siteConfig.name}
        </Link>

        {/* Desktop Nav - Hidden since we're using floating nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Nav - This is now hidden */}
        <div className="md:hidden">
          {/* The Sheet component for the hamburger menu has been removed. */}
        </div>

        <div className="hidden xl:flex items-center gap-2">
            <SocialLinks variant='hero' />
            <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
