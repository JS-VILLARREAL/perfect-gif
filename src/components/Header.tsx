import { ModeToggle } from '@/components/mode-toggle';
import { Button } from './ui/button';
import { DropdownMenuMobile } from './DropdownMenu';
import { Github } from './icons/Github';
import { Linkedin } from './icons/Linkedin';
import { Biohazard } from 'lucide-react';

export const Header = () => {
  return (
    <header className="border-dashed sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 lg:px-0 mx-auto flex justify-between items-center py-3">
        <div className="flex flex-row items-center space-x-2">
          <a href="/" className="fmr-4 flex items-center gap-2 lg:mr-6">
            <Biohazard className="h-6 w-6" />
            <span className="font-bold inline-block">GIF/perfect</span>
          </a>
        </div>

        <div className="hidden sm:flex gap-0.5 ">
          <a href="https://linkedin.com/in/stivenvr" target="_blank">
            <Button size="icon" variant="ghost" className="cursor-pointer rounded-md">
              <Linkedin />
            </Button>
          </a>

          <a
            href="https://github.com/JS-VILLARREAL/perfect-gif.git"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="icon" variant="ghost" className="cursor-pointer rounded-md">
              <Github />
            </Button>
          </a>

          <ModeToggle />
        </div>
        <div className="sm:hidden">
          <DropdownMenuMobile />
        </div>
      </div>
    </header>
  );
};
