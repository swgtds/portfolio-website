import { about } from "@/lib/data";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-8 md:py-12">
      <div className="container max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
          About Me
        </h2>
        <p className="text-lg leading-8 text-muted-foreground mb-8">
          {about.description}
        </p>
        <Button asChild size="lg">
          <a href="#projects">
            {about.cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
