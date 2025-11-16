import { Code, Database, Server, PenTool } from 'lucide-react';
import { WindowFrame } from '../shared/WindowFrame';
import { Badge } from '../ui/badge';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code />,
    skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Python', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Server />,
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'Redux'],
  },
  {
    title: 'Databases & Tools',
    icon: <Database />,
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Docker', 'Git & GitHub', 'Vite'],
  },
  {
    title: 'Design',
    icon: <PenTool />,
    skills: ['Figma', 'Responsive Design', 'UI/UX Principles', 'Prototyping'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            My Toolbox
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            The collection of tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <WindowFrame key={category.title}>
              <div className="flex items-center gap-3 mb-4">
                <div className='p-2 border-2 border-primary rounded-sm'>
                  {category.icon}
                </div>
                <h3 className="font-headline text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-2 border-primary text-sm px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </WindowFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
