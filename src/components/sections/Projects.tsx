import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { WindowFrame } from '../shared/WindowFrame';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../ui/badge';

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="flex">
              <WindowFrame
                title={`Project-${index + 1}.exe`}
                className="flex flex-col w-full"
              >
                <div className="group flex flex-col h-full">
                  <div className="overflow-hidden border-2 border-primary rounded-sm mb-4">
                    <Image
                      src={project.imageUrl}
                      alt={project.description}
                      width={600}
                      height={400}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                  <h3 className="font-headline text-2xl font-bold">
                    Project {index + 1}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-grow">
                    This is a placeholder for a project description. It describes what the project is about, the technologies used, and the challenges overcome.
                  </p>
                  <div className="my-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-2">
                      React
                    </Badge>
                    <Badge variant="outline" className="border-2">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="border-2">
                      Tailwind CSS
                    </Badge>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center font-bold group/link mt-auto"
                  >
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </WindowFrame>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
