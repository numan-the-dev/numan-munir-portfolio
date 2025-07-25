import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import project images
import smileDentalCover from "@/assets/www.smile.com.au_.png";
import zuraAphroZodiac from "@/assets/aphrozodiac.co_pages_zuraapp_srsltid=AfmBOorScu110CkhMwTNpYL21e4yEU3XV8PUpYUT-B14DIXswloMwIMM.png";
import fansaway from "@/assets/fansaway-C8VeM6ya.png";
import carswitch from "@/assets/carswitch-logo-D9xeeaBS.png";
import oneCardPro from "@/assets/one-card-pro.jpg";
import hostTravelstays from "@/assets/host-logo-DUZom2zj.png";
import staywoDisaster from "@/assets/staywo-disaster.jpg";
import buttSilkMills from "@/assets/butt-silk-mills.jpg";
import studentHelpSquad from "@/assets/student-help-squad.jpg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Smile Dental Cover",
      category: "Mobile App",
      type: "App",
      image: smileDentalCover,
      link: "https://play.google.com/store/apps/details?id=com.smile.members&hl=en",
      description: "Dental insurance mobile app",
    },
    {
      id: 2,
      title: "Zura AphroZodiac",
      category: "Mobile App",
      type: "App",
      image: zuraAphroZodiac,
      link: "https://play.google.com/store/apps/details?id=com.zura&hl=en",
      description: "Astrology and zodiac app",
    },
    {
      id: 3,
      title: "Fansaway",
      category: "Mobile App",
      type: "App",
      image: fansaway,
      link: "https://www.fansaway.com/",
      description: "Fan engagement platform",
    },
    {
      id: 4,
      title: "Carswitch",
      category: "Mobile App",
      type: "App",
      image: carswitch,
      link: "https://apps.apple.com/us/app/carswitch-used-cars-in-uae/id1213284852",
      description: "Used car marketplace",
    },
    {
      id: 5,
      title: "One Card Pro",
      category: "Web App",
      type: "Web",
      image: oneCardPro,
      link: "https://www.onecardpro.com/",
      description: "Business card management system",
    },
    {
      id: 6,
      title: "Host - TravelStays and more",
      category: "Mobile App",
      type: "App",
      image: hostTravelstays,
      link: "https://apps.apple.com/us/app/host-travelstays-and-more/id6468330509",
      description: "Travel accommodation platform",
    },
    {
      id: 7,
      title: "Staywo Disaster Management",
      category: "Web App",
      type: "Web",
      image: staywoDisaster,
      link: "https://www.staywo.com/",
      description: "Emergency management system",
    },
    {
      id: 8,
      title: "Butt Silk Mills",
      category: "Web App",
      type: "Web",
      image: buttSilkMills,
      link: "https://buttsilkmills.com/",
      description: "Textile industry website",
    },
    {
      id: 9,
      title: "Student Help Squad",
      category: "Web App",
      type: "Web",
      image: studentHelpSquad,
      link: "https://studenthelpsquad.co.uk/",
      description: "Student support platform",
    },
  ];

  const filters = ["All", "App", "Web"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <section id="projects" className="py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-code">
            Projects 🧑🏻‍💻
          </h2>
          <p className="text-xl text-muted-foreground font-code">
            Most Recent Works
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-secondary rounded-lg p-1">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-md transition-all duration-200 font-code ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover-glow overflow-hidden">
              <div className="relative overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 font-code">
                  {project.title}
                </h3>
                <span className="text-primary text-sm font-medium font-code">
                  {project.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
