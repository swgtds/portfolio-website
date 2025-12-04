
'use client';

import Link from 'next/link';

import { siteConfig } from '@/lib/data';
import { ThemeToggle } from './theme-toggle';
import { SocialLinks } from './social-links';

export default function Header() {

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b hidden md:block">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold text-primary">
          {siteConfig.name}
        </Link>

        <div className="flex items-center gap-2">
            <SocialLinks variant='hero' />
            <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
