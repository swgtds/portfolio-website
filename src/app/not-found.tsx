'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary mb-4">404</h1>
        <p className="text-base md:text-lg text-muted-foreground mb-6">
          Looks like your floating in space! Or maybe this page doesn’t exist.
        </p>
        <div className="flex justify-center">
          <Button asChild size="lg" className="px-6">
            <Link href="/">Back to homepage</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
