import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../ui/badge';
import { WindowFrame } from '../shared/WindowFrame';

const projectData = [
  {
    title: '🚀 Project 1',
    description: (
      <>
        It’s an e-commerce homepage. Does it sell anything?
        <br />
        Emotionally, yes.
        <br />
        Technically, also yes.
      </>
    ),
    linkText: 'Gaze Upon It',
  },
  {
    title: '🧠 Project 2',
    description: (
      <>
        A task management dashboard.
        <br />
        Does it help me manage my tasks?
        <br />
        Absolutely not.
        <br />
        But it looks fantastic.
      </>
    ),
    linkText: 'Witness the Chaos',
  },
  {
    title: '🧱 Project 3',
    description: (
      <>
        A drag-and-drop website builder.
        <br />
        So easy, even my houseplants could use it.
        <br />
        (And they’re divas.)
      </>
    ),
    linkText: 'Click At Your Own Risk',
  },
];


const projects = PlaceHolderImages.slice(0, 3).map((p, i) => ({
  ...p,
  ...projectData[i],
}));

export function Projects() {
  return (
    <section id="projects" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            🛠️ Recent Creations
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Things I built instead of going to bed like a normal human.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <WindowFrame
              key={project.id}
              title={`project-${index + 1}.js`}
              className="flex flex-col"
            >
              <div className="flex flex-col h-full">
                <div className="relative aspect-[4/3] overflow-hidden -m-6 mb-6 border-b-2 border-primary">
                  <Image
                    src={project.imageUrl}
                    alt={project.description as string}
                    fill
                    className="object-cover"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 font-headline">
                    {project.title}
                  </h3>
                  <div className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-2 border-primary">React</Badge>
                    <Badge variant="outline" className="border-2 border-primary">Next.js</Badge>
                    <Badge variant="outline" className="border-2 border-primary">Tailwind CSS</Badge>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-dashed">
                  <Link
                    href="#"
                    className="inline-flex items-center font-bold group"
                  >
                    <strong>{project.linkText}</strong>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </WindowFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
