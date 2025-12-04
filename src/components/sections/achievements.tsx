import { achievements } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Award } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-8 md:py-12 bg-card">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl mb-12">
          Achievements & Certifications
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                <Award className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{achievement.description}</p>
                <p className="text-sm font-medium text-primary mt-2">{achievement.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
