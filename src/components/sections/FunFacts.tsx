"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Wand2 } from 'lucide-react';
import { WindowFrame } from '../shared/WindowFrame';

const facts = [
  "I've watched “The Office” so many times I answer emails like Michael Scott.",
  "Pineapple on pizza? Yes. Fight me.",
  "My plants judge me. I feel it.",
  "I can solve a Rubik’s Cube in under a minute. Faster if threatened.",
  "I own more vintage keyboards than friends.",
  "I built a robot that serves butter. No follow-up questions.",
  "My favorite part of coding is deleting 400 lines and watching everything still work.",
];

export function FunFacts() {
  const [fact, setFact] = useState<string | null>(null);

  useEffect(() => {
    setFact(facts[Math.floor(Math.random() * facts.length)]);
  }, []);

  const getNewFact = () => {
    let newFact;
    do {
      newFact = facts[Math.floor(Math.random() * facts.length)];
    } while (newFact === fact);
    setFact(newFact);
  };

  return (
    <section id="fun-facts" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            🤪 Quirks & Curiosities
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Because you're not hiring a robot. Probably.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <WindowFrame>
            <div className="text-center p-6">
              <p className="text-xl font-medium min-h-[6rem] flex items-center justify-center">
                {fact ? `"${fact}"` : 'Generating a quirky fact...'}
              </p>
              <Button
                variant="outline"
                className="mt-8 border-2 border-primary px-6 py-4 shadow-brutalist transition-all hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                onClick={getNewFact}
              >
                <Wand2 className="mr-2 h-5 w-5" />
                Show Me Another!
              </Button>
            </div>
          </WindowFrame>
        </div>
      </div>
    </section>
  );
}
