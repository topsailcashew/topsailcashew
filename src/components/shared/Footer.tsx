import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://github.com',
    icon: <Github className="h-6 w-6" />,
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com',
    icon: <Linkedin className="h-6 w-6" />,
    label: 'LinkedIn',
  },
  {
    href: 'https://twitter.com',
    icon: <Twitter className="h-6 w-6" />,
    label: 'Twitter',
  },
];

export function Footer() {
  return (
    <footer className="bg-background border-t-2 border-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hover:text-muted-foreground transition-colors"
              >
                {social.icon}
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} topsailcashew.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
