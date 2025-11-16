import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            🌰 topsailcashew
          </h1>
          <div className="mt-6 text-lg md:text-xl max-w-3xl text-muted-foreground space-y-2">
            <p>This site has <strong>nothing</strong> to do with boats.</p>
            <p>It also has <strong>nothing</strong> to do with nuts.</p>
            <p>Honestly, I don’t know why you’re here…</p>
            <p>…but since you are, please admire my work 👇</p>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-10 border-2 border-primary text-lg px-8 py-6 shadow-brutalist transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
          >
            <Link href="#projects">
              <strong>Behold My Creations</strong> <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
