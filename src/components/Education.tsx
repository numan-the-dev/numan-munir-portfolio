import { GraduationCap, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Science🎓',
      institution: 'University of Central Punjab - Pakistan',
      period: '2016 - 2020',
      icon: '🎓'
    },
    {
      degree: 'Higher Secondary🧪',
      institution: 'CBSE - Bengaluru',
      period: '2014 - 2016',
      icon: '🧪'
    }
  ];

  return (
    <section id="education" className="py-20 section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Qualification 🧑🏻‍🎓
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            My Personal Journey 🚗
          </p>
          <div className="text-lg text-primary font-semibold">
            Education
          </div>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="hover-glow text-center">
              <CardHeader>
                <div className="text-6xl mb-4">
                  <GraduationCap className="h-16 w-16 mx-auto text-primary" />
                </div>
                <CardTitle className="text-xl">
                  {edu.degree}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {edu.institution}
                </h3>
                <div className="flex items-center justify-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{edu.period}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;