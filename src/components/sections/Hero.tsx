import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Senje's Stomping Grounds
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl text-muted-foreground">
            Hi, I'm Senje. A web developer who finds joy in crafting unique and
            engaging digital experiences just for the fun of it. Welcome to my
            corner of the internet.
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-10 border-2 border-primary text-lg px-8 py-6 shadow-brutalist transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
          >
            <Link href="#projects">
              See My Work <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
