import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Masters in Computer Science 🎓",
      institution: "Virtual University of Pakistan",
      period: "2022 - 2024",
      details: [
        "Built a solid foundation in programming, data structures, OOP, and database management.",
        "Gained practical coding skills through academic projects, focusing on web and mobile development basics.",
        "Developed a problem-solving mindset and adaptability to new technologies.",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-code">
            Education 🎓
          </h2>
          <p className="text-xl text-muted-foreground font-code">
            My Academic Journey
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="hover-glow text-center px-8 py-8">
              <CardHeader>
                <div className="text-6xl mb-4">
                  <GraduationCap className="h-16 w-16 mx-auto text-primary" />
                </div>
                <CardTitle className="text-2xl font-code">
                  {edu.degree}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold text-primary mb-4 font-code">
                  {edu.institution}
                </h3>
                <div className="flex items-center justify-center text-muted-foreground font-code mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-lg">{edu.period}</span>
                </div>
                <ul className="text-left text-muted-foreground text-base font-code space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i}>• {detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
