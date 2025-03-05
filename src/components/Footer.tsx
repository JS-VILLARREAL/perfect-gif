export const Footer = () => {
  return (
    <footer className="border-dashed border-t py-6 md:py-0">
      <div className="container-wrapper">
        <div className="container p-4">
          <div className="text-balance text-center text-sm leading-loose text-muted-foreground">
            Built by <span className="font-medium">Steven</span>. The source code is available on{' '}
            <a
              href="https://github.com/JS-VILLARREAL/perfect-gif.git"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
};
