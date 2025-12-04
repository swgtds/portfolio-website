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
import { MoreHorizontal } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 rounded-full border border-border/50 bg-card shadow-lg backdrop-blur-sm">
        {mobileNavLinks.map((link) => {
          // Handle the "More" link specially
          if (link.name === 'More') {
            return (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full hover:bg-accent"
                  >
                    <MoreHorizontal className="h-5 w-5" />
                    <span className="sr-only">More sections</span>
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
