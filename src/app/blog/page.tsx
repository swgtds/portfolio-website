import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Footer from "@/components/sections/footer";

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
  {
    title: "A Guide to Monotonic Design",
    description: "Exploring the power of minimalist, two-tone color schemes in modern web design.",
    date: "November 2, 2023",
  },
  {
    title: "The Art of the Circular Transition",
    description: "How to implement beautiful and engaging theme transitions using the View Transitions API.",
    date: "November 5, 2023",
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-24 md:pt-32">
        <section id="blog" className="py-8 md:py-12">
          <div className="container max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-center text-foreground sm:text-5xl mb-4">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground text-center mb-12">
              My thoughts on technology, design, and development.
            </p>
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
      </main>
      <Footer />
    </div>
  );
}
