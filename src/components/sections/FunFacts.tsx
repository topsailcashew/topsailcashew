"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Wand2 } from 'lucide-react';
import { WindowFrame } from '../shared/WindowFrame';

const facts = [
  "I've re-watched 'The Office' more times than I can count.",
  'I believe pineapple belongs on pizza. No debates.',
  'My plants probably have more social life than I do.',
  'I can solve a Rubik\'s cube in under a minute.',
  'I have a collection of over 50 vintage computer keyboards.',
  'I once built a robot that serves butter.',
  "My favorite part of coding is deleting code that's no longer needed.",
];

export function FunFacts() {
  const [fact, setFact] = useState(facts[0]);

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
            Quirks & Curiosities
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            A little glimpse into the human behind the code.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <WindowFrame>
            <div className="text-center p-6">
              <p className="text-xl font-medium min-h-[6rem] flex items-center justify-center">
                "{fact}"
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
