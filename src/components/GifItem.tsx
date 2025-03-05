// import { Card, CardContent, CardFooter } from '@/components/ui/card';
// import { Label } from './ui/label';

interface GifItemProps {
  title: string;
  url: string;
}

export const GifItem = ({ title, url }: GifItemProps) => {
  return (
    <div className="p-2">
      <img className="rounded-lg size-full object-contain" src={url} alt={title} />
    </div>
  );
};
