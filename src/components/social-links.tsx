
'use client';

import { siteConfig } from "@/lib/data";
import { HoverLink } from "./hover-link";
import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import { XIcon } from "./icons/x-icon";
import { Button } from "./ui/button";

type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon | ((props: React.SVGProps<SVGSVGElement>) => JSX.Element);
};

type SocialLinksProps = {
  variant: 'hero' | 'contact' | 'footer' | 'drawer';
};

const allLinks: Record<string, SocialLink> = {
  github: { label: "GitHub", href: siteConfig.links.github, icon: Github },
  linkedin: { label: "LinkedIn", href: siteConfig.links.linkedin, icon: Linkedin },
  x: { label: "X", href: siteConfig.links.x, icon: XIcon },
  email: { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
};

export function SocialLinks({ variant }: SocialLinksProps) {
  let linksToShow: SocialLink[] = [];

  if (variant === 'hero' || variant === 'drawer') {
    linksToShow = [allLinks.github, allLinks.linkedin, allLinks.x];
  } else if (variant === 'contact' || variant === 'footer') {
    linksToShow = [allLinks.github, allLinks.linkedin, allLinks.x, allLinks.email];
  }

  if (variant === 'drawer') {
    return (
        <div className="flex justify-center gap-2">
            {linksToShow.map(link => (
                <Button variant="ghost" size="icon" asChild key={link.label}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                        <link.icon className="h-5 w-5" />
                    </a>
                </Button>
            ))}
        </div>
    )
  }

  return (
    <div className="flex justify-center gap-2">
      {linksToShow.map(link => (
        <HoverLink key={link.label} href={link.href} icon={link.icon} label={link.label} />
      ))}
    </div>
  );
}
