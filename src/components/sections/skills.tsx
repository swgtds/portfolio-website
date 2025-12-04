import { skills } from "@/lib/data";
import { Badge } from "../ui/badge";

export default function Skills() {
  return (
    <section id="skills" className="py-8 md:py-12">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl mb-12">
          Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.flatMap(category => category.skills).map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm px-4 py-2">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
