import { useState } from "react";
import { Code, Smartphone, Globe, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description:
        "I develop user interfaces and ux experiences for mobile applications.",
      features: [
        "React Native Development",
        "iOS App Development",
        "Android App Development",
        "Cross-platform Solutions",
        "App Store Deployment",
        "Performance Optimization",
      ],
    },
    {
      id: 2,
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "I create and develop user interfaces for web applications.",
      features: [
        "Frontend Development",
        "Responsive Design",
        "React & TypeScript",
        "Modern UI/UX",
        "SEO Optimization",
        "Performance Tuning",
      ],
    },
    {
      id: 3,
      icon: <Code className="h-8 w-8" />,
      title: "Backend Development",
      description: "I develop backend services and APIs for applications.",
      features: [
        "API Development",
        "Database Design",
        "Server Architecture",
        "Laravel & Node.js",
        "Cloud Integration",
        "Security Implementation",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-code">
            Services 🛠️
          </h2>
          <p className="text-xl text-muted-foreground font-code">
            What I Offer
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group hover-glow cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="text-primary mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 font-code">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed font-code">
                  {service.description}
                </p>
                <Button
                  variant="ghost"
                  className="group/btn font-code"
                  onClick={() => setSelectedService(service.id)}
                >
                  View More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Details Modal */}
        <Dialog
          open={selectedService !== null}
          onOpenChange={(open) => {
            console.log("Dialog open state:", open);
            if (!open) setSelectedService(null);
          }}
        >
          <DialogContent className="max-w-lg">
            {selectedService && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold font-code flex items-center gap-3">
                    {services.find((s) => s.id === selectedService)?.icon}
                    {services.find((s) => s.id === selectedService)?.title}
                  </DialogTitle>
                </DialogHeader>
                <DialogClose asChild>
                  <button
                    autoFocus
                    className="absolute right-4 top-4 flex items-center justify-center w-10 h-10 p-2 rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none border-2 border-orange-400 shadow-[0_0_0_4px_rgba(251,191,36,0.3)]"
                    onClick={() => setSelectedService(null)}
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </button>
                </DialogClose>
                <div className="space-y-4">
                  <p className="text-muted-foreground font-code">
                    {
                      services.find((s) => s.id === selectedService)
                        ?.description
                    }
                  </p>
                  <div>
                    <h4 className="font-semibold mb-3 font-code">
                      What I provide:
                    </h4>
                    <ul className="space-y-2">
                      {services
                        .find((s) => s.id === selectedService)
                        ?.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 font-code"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Services;
