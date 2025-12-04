'use client';

import { useState } from 'react';
import { mobileNavLinks, moreNavLinks } from '@/lib/data';
import { ThemeToggle } from './theme-toggle';
import { HoverLink } from './hover-link';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { MoreHorizontal, X } from 'lucide-react';

export default function BottomNav() {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 rounded-full border border-border/50 bg-card shadow-2xl backdrop-blur-sm ring-1 ring-black/5 dark:ring-white/10">
        {mobileNavLinks.map((link) => {
          // Handle the "More" link specially
          if (link.name === 'More') {
            return (
              <DropdownMenu key={link.name} onOpenChange={setIsMoreMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full hover:bg-accent"
                  >
                    <div className="relative h-5 w-5 flex items-center justify-center">
                      <MoreHorizontal 
                        className={`h-5 w-5 absolute transition-all duration-300 ease-in-out ${
                          isMoreMenuOpen 
                            ? 'rotate-90 scale-0 opacity-0' 
                            : 'rotate-0 scale-100 opacity-100'
                        }`} 
                      />
                      <X 
                        className={`h-5 w-5 absolute transition-all duration-300 ease-in-out ${
                          isMoreMenuOpen 
                            ? 'rotate-0 scale-100 opacity-100' 
                            : 'rotate-90 scale-0 opacity-0'
                        }`} 
                      />
                    </div>
                    <span className="sr-only">
                      {isMoreMenuOpen ? 'Close menu' : 'More sections'}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="center" 
                  side="top"
                  className="mb-2 min-w-[160px]"
                >
                  {moreNavLinks.map((moreLink) => (
                    <DropdownMenuItem key={moreLink.name} asChild>
                      <a
                        href={moreLink.href}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <moreLink.icon className="h-4 w-4" />
                        {moreLink.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }
          
          // Regular navigation links
          return (
            <HoverLink
              key={link.name}
              href={link.href}
              icon={link.icon}
              label={link.name}
            />
          );
        })}
        <div className="w-px h-6 bg-border mx-1"></div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
