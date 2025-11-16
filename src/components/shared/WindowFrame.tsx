import { ReactNode } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type WindowFrameProps = {
  children: ReactNode;
  className?: string;
  title?: string;
};

export function WindowFrame({ children, className, title }: WindowFrameProps) {
  return (
    <Card
      className={cn(
        'border-2 border-primary shadow-brutalist-lg transition-shadow hover:shadow-brutalist bg-background',
        className
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between gap-2 p-3 border-b-2 border-primary">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full border border-primary bg-muted"></div>
          <div className="w-3 h-3 rounded-full border border-primary bg-muted"></div>
          <div className="w-3 h-3 rounded-full border border-primary bg-muted"></div>
        </div>
        {title && <p className="text-sm font-medium truncate">{title}</p>}
      </CardHeader>
      <CardContent className="p-4 md:p-6">{children}</CardContent>
    </Card>
  );
}
