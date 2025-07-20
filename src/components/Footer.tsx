import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-lg font-bold text-gradient-logo font-code">
              &lt; Numan Munir /&gt;
            </span>
          </div>

          {/* Copyright */}
          <div className="flex items-center text-muted-foreground text-sm font-code">
            <span>© 2024 Numan Munir. Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
            <span>for you</span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <div className="w-5 h-5 bg-current rounded"></div>
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <div className="w-5 h-5 bg-current rounded"></div>
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Twitter"
            >
              <div className="w-5 h-5 bg-current rounded"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;