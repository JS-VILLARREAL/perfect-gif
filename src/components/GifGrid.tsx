import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import { Button } from './ui/button';
import { BlurFade } from './magicui/blur-fade';
import { Trash2 } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

interface GifGridProps {
  category: string;
}

export const GifGrid = ({ category }: GifGridProps) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <div className="flex justify-between items-center my-6">
        <h1 className="text-base md:text-lg tracking-tighter font-bold text-center animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
          GIF {category}
        </h1>
        <Button variant="destructive" size="icon" className="cursor-pointer">
          <Trash2 />
          <span className="sr-only">Trash</span>
        </Button>
      </div>
      {isLoading && (
        <div className="flex flex-col space-y-4">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-52 w-auto rounded-xl" />
        </div>
      )}
      <section id="photos">
        <div className="columns-auto gap-1 md:columns-2 xl:columns-3">
          {images.map(({ id, title, url }) => (
            <BlurFade key={id} delay={0.3 + id * 0.05} inView>
              <GifItem title={title} url={url} />
            </BlurFade>
          ))}
        </div>
      </section>
    </>
  );
};
