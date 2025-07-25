import { Download, Award, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Experience",
      value: "Over 3 Years Working",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Completed",
      value: "30 + Projects",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Support",
      value: "Online 24/7",
    },
  ];

  return (
    <section id="about" className="py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-code">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground font-code">
            My Introduction
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 bg-secondary rounded-2xl flex items-center justify-center overflow-hidden">
                {/* Placeholder for about image */}
                <div className="text-6xl">👨‍💻</div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-primary rounded-full"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover-glow">
                  <CardContent className="p-6">
                    <div className="text-primary mb-3 flex justify-center">
                      {stat.icon}
                    </div>
                    <h3 className="font-semibold mb-1 font-code">
                      {stat.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-code">
                      {stat.value}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed font-code">
                Mobile Application Developer with 3+ years of experience
                delivering scalable, high-quality solutions for global clients.
                Skilled in React Native, modern web technologies, API
                integrations, and automation testing.
              </p>
              <p className="text-muted-foreground leading-relaxed font-code">
                I enjoy solving real-world problems through clean code and smart
                architecture, and thrive in collaborative environments. I’m
                passionate about leveraging emerging technologies, especially
                AI, to create innovative products that drive business success.
              </p>
            </div>

            {/* Download CV Button */}
            <div>
              <a
                href="/Numan-Munir-Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-code"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
