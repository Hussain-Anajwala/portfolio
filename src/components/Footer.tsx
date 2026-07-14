import { BrainCircuit, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2" aria-label="Back to top">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <BrainCircuit className="w-4 h-4 text-primary-foreground" aria-hidden="true" />
            </div>
            <span className="font-mono font-bold text-sm">
              hussain<span className="text-primary">.ai</span>
            </span>
          </a>

          <p className="text-sm text-muted-foreground font-mono flex items-center gap-1">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" aria-hidden="true" />
            <span>Copyright {currentYear} Hussain Anajwala</span>
          </p>

          <a href="#" aria-label="Scroll back to top of page" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors min-h-[48px] flex items-center">
            <span className="text-primary">&gt;</span> back_to_top
          </a>
        </div>
      </div>
    </footer>
  );
};
