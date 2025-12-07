import { experience } from "@/lib/data";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <section id="experience" className="py-2 md:py-4">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl mb-12">
          Work Experience
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 w-0.5 h-full bg-border" aria-hidden="true"></div>

          <div className="space-y-12">
            {experience.map((item, index) => (
              <div key={index} className="relative flex items-start group">
                {/* Dot */}
                <div className="absolute left-6 top-1 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background transition-transform duration-300 group-hover:scale-125"></div>
                
                {/* Content */}
                <div className="pl-14">
                  <div className="flex items-center gap-3 mb-2">
                    {item.logo && (
                      <Image
                        src={item.logo}
                        alt={`${item.company} logo`}
                        width={32}
                        height={32}
                        className="rounded-full object-contain"
                      />
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{item.role}</h3>
                      <p className="text-lg font-medium text-foreground">{item.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
                  
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary" 
                          className="text-xs px-2 py-0.5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-outside ml-5">
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
