import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--primary)/0.05_0%,transparent_100%)]" />

      <div className="container mx-auto px-4">
        <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-1000">
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-bold leading-tight tracking-tighter text-shadow-sm hover:text-shadow transition-all duration-300">
            🌰 topsailcashew
          </h1>
          <div className="mt-8 text-xl md:text-2xl max-w-3xl text-muted-foreground space-y-4 font-medium text-balance">
            <p>This site has <strong className="text-foreground underline decoration-wavy decoration-primary/50">nothing</strong> to do with boats.</p>
            <p>It also has <strong className="text-foreground underline decoration-wavy decoration-primary/50">nothing</strong> to do with nuts.</p>
            <p>Honestly, I don’t know why you’re here…</p>
            <p className="text-foreground">…but since you are, please admire my work 👇</p>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-12 border-2 border-primary text-xl px-10 py-8 shadow-brutalist transition-all hover:shadow-brutalist-lg hover:-translate-y-1 bg-background"
          >
            <Link href="#projects">
              <strong>Behold My Creations</strong> <ArrowDown className="ml-2 h-6 w-6 animate-bounce" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
