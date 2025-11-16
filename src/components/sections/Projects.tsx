import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

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
            <Card
              key={project.id}
              className="flex flex-col overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.description}
                    width={600}
                    height={400}
                    className="w-full h-40 object-cover"
                    data-ai-hint={project.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 flex-grow">
                <CardTitle className="text-2xl font-bold mb-2">
                  Project {index + 1}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground line-clamp-3">
                  This is a placeholder for a project description. It describes
                  what the project is about, the technologies used, and the
                  challenges overcome.
                </CardDescription>
                <div className="my-4 flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 mt-auto">
                <Link
                  href="#"
                  className="inline-flex items-center font-bold group"
                >
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
