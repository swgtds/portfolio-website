import { siteConfig } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
