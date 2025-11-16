import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { FunFacts } from '@/components/sections/FunFacts';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <FunFacts />
      <Contact />
    </>
  );
}
