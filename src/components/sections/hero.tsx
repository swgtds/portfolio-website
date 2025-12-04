'use client';

import { useState } from 'react';
import { hero } from "@/lib/data";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { SocialLinks } from "../social-links";
import { ResumeModal } from '../resume-modal';

export default function Hero() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <>
      <section id="hero" className="relative pt-24 md:pt-32 pb-8 md:pb-12">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-lg font-medium text-primary mb-2">{hero.role}</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
            {hero.name}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {hero.tagline}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="flex justify-center gap-2 sm:gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              
              <Button size="lg" variant="outline" onClick={() => setIsResumeModalOpen(true)}>
                <Download className="mr-2" />
                Resume
              </Button>

            </div>
          </div>
          <div className="mt-8">
            <SocialLinks variant="hero" />
          </div>
        </div>
      </section>
      <ResumeModal isOpen={isResumeModalOpen} onOpenChange={setIsResumeModalOpen} />
    </>
  );
}
