import { useState } from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  const experiences = [
    {
      title: 'Senior Software Engineer (L2)',
      company: 'Xcorebit',
      period: 'Oct\'24 - Currently Working🧑🏻‍💻',
      description: 'Working currently as a Software Developer Trainee for full-time at EXA AG. Providing quality work to clients and company.',
      responsibilities: [
        'Web Page Development.',
        'I create UI Interfaces.',
        'I create UX Element Interactions.'
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'Carswitch',
      period: 'Jan\'23 - Nov\'24',
      description: 'Worked at EXA AG as Intern for 5 months. Providing quality work to clients and company.',
      responsibilities: [
        'I developed the User Interfaces.',
        'Web Page Development.',
        'Part of the OTP (Operational Transfer Pricing) Team.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Brand786',
      period: 'Mar\'20 - Dec\'22',
      description: 'Worked at EXA AG as Intern for 5 months. Providing quality work to clients and company.',
      responsibilities: [
        'I developed the User Interfaces.',
        'Web Page Development.',
        'Part of the OTP (Operational Transfer Pricing) Team.'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Solution Experts',
      period: 'Aug\'18 - Feb\'20',
      description: 'Worked at EXA AG as Intern for 5 months. Providing quality work to clients and company.',
      responsibilities: [
        'I developed the User Interfaces.',
        'Web Page Development.',
        'Part of the OTP (Operational Transfer Pricing) Team.'
      ]
    }
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
                    <h3 className="text-xl font-semibold font-code">{exp.title}</h3>
                    <p className="text-primary font-medium font-code">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm font-code">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 font-code">{exp.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {exp.responsibilities.slice(0, 2).map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-2 text-sm font-code">
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
        <Dialog open={selectedExperience !== null} onOpenChange={() => setSelectedExperience(null)}>
          <DialogContent className="max-w-2xl">
            {selectedExperience !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold font-code">
                    {experiences[selectedExperience].title} at {experiences[selectedExperience].company}
                  </DialogTitle>
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
                    <h4 className="font-semibold mb-3 font-code">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {experiences[selectedExperience].responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2 font-code">
                          <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          {responsibility}
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

export default Experience;