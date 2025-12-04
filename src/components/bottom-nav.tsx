'use client';

import { mobileNavLinks } from '@/lib/data';
import { ThemeToggle } from './theme-toggle';
import { HoverLink } from './hover-link';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <div className="flex items-center gap-2 p-2 rounded-full border border-border/50 bg-card shadow-lg">
        {mobileNavLinks.map((link) => (
          <HoverLink
            key={link.name}
            href={link.href}
            icon={link.icon}
            label={link.name}
          />
        ))}
        <div className="w-px h-6 bg-border mx-1"></div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
