import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";

const blogPosts = [
  {
    title: "My First Blog Post",
    description: "A short summary of what this blog post is about. It's interesting and you should read it.",
    date: "October 26, 2023",
  },
    {
    title: "Exploring New Technologies",
    description: "Diving deep into the latest trends in web development and what they mean for the future.",
    date: "October 28, 2023",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-8 md:py-12">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl mb-12">
          From the Blog
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
