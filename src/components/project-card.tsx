"use client";

import type { Project } from "@/lib/types";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectModal } from "./project-modal";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="flex flex-col overflow-hidden group">
        <CardHeader className="p-0">
          <div className="relative overflow-hidden h-56">
            <Image
              src={project.image.imageUrl}
              alt={project.image.description}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              data-ai-hint={project.image.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-foreground mb-1">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-3 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-auto">
            <Button variant="outline" size="sm" onClick={() => setIsModalOpen(true)}>Read More</Button>
            <Button variant="ghost" size="sm" asChild>
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${project.title}`}>
                Live Demo <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
}
