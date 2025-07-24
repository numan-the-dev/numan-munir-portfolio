import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNameHover = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2500);
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById("projects");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative section-padding"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1
              className="text-5xl lg:text-6xl font-bold font-code cursor-pointer"
              onMouseEnter={handleNameHover}
            >
              <span
                className={
                  isAnimating ? "dice-roll inline-block" : "inline-block"
                }
              >
                Numan Munir
              </span>
              <span className="text-4xl lg:text-5xl ml-2">👋</span>
            </h1>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-0.5 bg-primary"></div>
              <div className="font-code">
                <h2 className="text-xl lg:text-2xl text-muted-foreground leading-tight">
                  Mobile Application Developer
                </h2>
                <h3 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent mt-1">
                  AI & Automation
                </h3>
              </div>
            </div>
          </div>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
            I am dedicated to working collaboratively to turn your ideas into
            reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold font-code"
              asChild
            >
              <a href="#contact">
                Say Hello
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right Content - Profile Photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 hover-glow floating">
              <img
                src={profilePhoto}
                alt="Numan Munir"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-primary rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <div className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors font-code">
          <span className="text-sm">Scroll Down</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
