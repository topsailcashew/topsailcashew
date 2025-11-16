import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../ui/badge';
import { WindowFrame } from '../shared/WindowFrame';

const projects = PlaceHolderImages;

export function Projects() {
  return (
    <section id="projects" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Recent Creations
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are a few things I've cobbled together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <WindowFrame
              key={project.id}
              title={`project-${index + 1}.js`}
              className="flex flex-col"
            >
              <div className="flex flex-col h-full">
                <div className="relative h-48 overflow-hidden -m-6 mb-6 border-b-2 border-primary">
                  <Image
                    src={project.imageUrl}
                    alt={project.description}
                    fill
                    className="object-cover"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 font-headline">
                    Project {index + 1}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    This is a placeholder for a project description. It
                    describes what the project is about, the technologies used,
                    and the challenges overcome.
                  </p>
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
                    View Project
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
