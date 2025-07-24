import { Heart } from "lucide-react";
import { Github, Linkedin } from "lucide-react";
import SocialBar from "./SocialBar";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <span
              className="text-lg font-bold text-gradient-logo font-code"
              aria-label="Mobile Application Developer | AI & Automation"
            >
              &lt;Numan Munir/&gt;
            </span>
          </div>

          {/* Copyright */}
          <div className="flex items-center text-muted-foreground text-sm font-code">
            <span>© {new Date().getFullYear()} Numan Munir.</span>
            <SocialBar />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
