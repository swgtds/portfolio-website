
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { NavLink } from '@/lib/types';

type HoverLinkProps = {
  href: string;
  icon: NavLink['icon'];
  label: string;
};

export function HoverLink({ href, icon: Icon, label }: HoverLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isExternal = href.startsWith('http') || href.startsWith('mailto');

  const linkProps = isExternal
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { href };

  return (
    <Link
      {...linkProps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center p-3 rounded-full transition-all duration-300 ease-in-out bg-secondary/0 hover:bg-secondary"
      aria-label={label}
    >
      <div
        className="flex items-center overflow-hidden transition-all duration-300 ease-in-out"
        style={{ width: isHovered ? 'auto' : '20px' }}
      >
        <div className={cn("flex items-center gap-2", isHovered ? 'w-auto' : 'w-5')}>
          <Icon className="h-5 w-5 flex-shrink-0 text-muted-foreground group-hover:text-foreground" />
          <span
            className={cn(
              "whitespace-nowrap text-sm text-secondary-foreground transition-opacity duration-300",
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
            style={{ width: isHovered ? 'auto' : 0 }}
          >
            {label}
          </span>
        </div>
      </div>
    </Link>
  );
}
