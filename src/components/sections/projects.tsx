import { projects } from "@/lib/data";
import { ProjectCard } from "../project-card";

export default function Projects() {
  return (
    <section id="projects" className="py-8 md:py-12 bg-card">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl mb-12">
          Selected Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
