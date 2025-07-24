import { useState } from "react";
import { Calendar, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(
    null
  );

  const experiences = [
    {
      title: "React Native Developer (Remote)",
      company: "Devorium",
      period: "Aug 2022 - Present",
      description:
        "Delivering high-quality web, mobile, and software solutions for global clients. Focused on innovation and technical excellence, collaborating with reputed brands to develop scalable products.",
      responsibilities: [
        "Developed and maintained cross-platform mobile applications using React Native, delivering seamless performance on both iOS and Android.",
        "Integrated AI-powered features such as smart notifications, recommendation engines, and Zendesk-based customer service chatbots.",
        "Collaborated with remote teams to build scalable mobile solutions for global clients.",
        "Improved app performance and UX by optimizing components and managing state efficiently.",
        "Worked on API integrations including RESTful and GraphQL services.",
        "Implemented automated testing and CI/CD pipelines using Detox and Maestro.",
        "Contributed to technical research and prototyping, exploring AI SDKs and ML libraries.",
        "Participated in code reviews and knowledge sharing across teams.",
      ],
    },
    {
      title: "Mobile Application Developer",
      company: "CarSwitch Arabia",
      period: "Aug 2021 - Aug 2022",
      description:
        "Worked on the CarSwitch mobile app, simplifying car buying and selling in the Middle East with integrated inspection, pricing, and end-to-end transaction management.",
      responsibilities: [
        "Developed and maintained the CarSwitch mobile app using React Native.",
        "Enhanced user interfaces and workflows, improving customer engagement.",
        "Collaborated closely with product and design teams to implement new features.",
        "Integrated third-party services and APIs, including payment gateways and location services.",
        "Worked on app performance optimization, reducing load times and ensuring consistency.",
        "Contributed to debugging and refactoring legacy code, improving maintainability.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-code">
            Experience ⚡
          </h2>
          <p className="text-xl text-muted-foreground font-code">
            My Professional Journey
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover-glow">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold font-code">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium font-code">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm font-code">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 font-code">
                  {exp.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {exp.responsibilities
                    .slice(0, 2)
                    .map((responsibility, respIndex) => (
                      <li
                        key={respIndex}
                        className="flex items-start gap-2 text-sm font-code"
                      >
                        <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {responsibility}
                      </li>
                    ))}
                </ul>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedExperience(index)}
                  className="font-code"
                >
                  View More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Details Modal */}
        <Dialog
          open={selectedExperience !== null}
          onOpenChange={() => setSelectedExperience(null)}
        >
          <DialogContent className="max-w-2xl">
            {selectedExperience !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold font-code">
                    {experiences[selectedExperience].title} at{" "}
                    {experiences[selectedExperience].company}
                  </DialogTitle>
                  <DialogClose asChild>
                    <button
                      autoFocus
                      className="absolute right-4 top-4 flex items-center justify-center w-10 h-10 p-2 rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none border-2 border-orange-400 shadow-[0_0_0_4px_rgba(251,191,36,0.3)]"
                      onClick={() => setSelectedExperience(null)}
                      aria-label="Close"
                    >
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close</span>
                    </button>
                  </DialogClose>
                  <div className="flex items-center text-muted-foreground text-sm font-code">
                    <Calendar className="h-4 w-4 mr-1" />
                    {experiences[selectedExperience].period}
                  </div>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-muted-foreground font-code">
                    {experiences[selectedExperience].description}
                  </p>
                  <div>
                    <h4 className="font-semibold mb-3 font-code">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {experiences[selectedExperience].responsibilities.map(
                        (responsibility, respIndex) => (
                          <li
                            key={respIndex}
                            className="flex items-start gap-2 font-code"
                          >
                            <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            {responsibility}
                          </li>
                        )
                      )}
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

export default Experience;
