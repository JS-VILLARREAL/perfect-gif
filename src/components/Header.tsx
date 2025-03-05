import { ModeToggle } from '@/components/mode-toggle';
import { Button } from './ui/button';
import { Github, Linkedin } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-dashed bg-white/55 dark:bg-black/55 backdrop-blur-2xl">
      <div className="container px-4 lg:px-0 mx-auto flex justify-between items-center py-1">
        <div className="flex flex-row items-center space-x-2">
          <span className="text-lg">⌘</span>
          <h2 className="text-base font-bold tracking-tighter sm:text-lg xl:text-xl">
            GIF Perfect
          </h2>
        </div>

        <div className="flex space-x-2">
          <a href="https://linkedin.com/in/stivenvr" target="_blank">
            <Button size="icon" variant="ghost" className="cursor-pointer">
              <Linkedin />
            </Button>
          </a>
          <a href="https://linkedin.com/in/stivenvr" target="_blank">
            <Button size="icon" variant="ghost" className="cursor-pointer">
              <Github />
            </Button>
          </a>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
