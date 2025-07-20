import { ChevronDown, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold">
              Numan Munir
              <span className="text-4xl lg:text-5xl ml-2">👋</span>
            </h1>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-0.5 bg-primary"></div>
              <h2 className="text-xl lg:text-2xl text-muted-foreground">
                Sr.Software Engineer
              </h2>
            </div>
          </div>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
            I am committed to collaborating closely to bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Say Hello
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 pt-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <div className="w-6 h-6 bg-current"></div>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <div className="w-6 h-6 bg-current"></div>
            </a>
          </div>
        </div>

        {/* Right Content - Profile Photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 hover-glow">
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm">Scroll Down</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;