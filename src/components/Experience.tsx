import { Calendar, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Experience = () => {
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Experience 💼
          </h2>
          <p className="text-xl text-muted-foreground">
            What I work as
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover-glow">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl lg:text-2xl">
                      {exp.title}
                    </CardTitle>
                    <h3 className="text-lg text-primary font-semibold mt-1">
                      {exp.company}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      View More
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start">
                      <ChevronRight className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>{responsibility}</span>
                    </li>
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

export default Experience;