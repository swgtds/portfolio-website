"use client";

import type { Project } from "@/lib/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";

type ProjectModalProps = {
  project: Project;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export function ProjectModal({ project, isOpen, onOpenChange }: ProjectModalProps) {
  const DetailSection = ({ title, content }: { title: string; content: string }) => (
    <div>
      <h4 className="font-semibold text-primary">{title}</h4>
      <p className="text-muted-foreground">{content}</p>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-4">
            <DetailSection title="The Problem" content={project.details.problem} />
            <DetailSection title="My Role" content={project.details.role} />
            <DetailSection title="Technology Used" content={project.details.techUsed} />
            <DetailSection title="Outcome" content={project.details.outcome} />
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="outline" asChild>
            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          <Button asChild>
            <a href={project.links.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
