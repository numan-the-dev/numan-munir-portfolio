import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 95, expertise: 'Expert' },
        { name: 'Expo', level: 95, expertise: 'Expert' },
        { name: 'IOS', level: 90, expertise: 'Expert' },
        { name: 'Android', level: 90, expertise: 'Expert' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Python', level: 70, expertise: 'Intermediate' },
        { name: 'Laravel', level: 95, expertise: 'Expert' },
        { name: 'Node.js', level: 90, expertise: 'Expert' },
        { name: 'MySQL', level: 85, expertise: 'Expert' },
        { name: 'GitLab', level: 90, expertise: 'Expert' },
        { name: 'VS Code', level: 95, expertise: 'Expert' },
        { name: 'GitHub', level: 90, expertise: 'Expert' },
        { name: 'MongoDB', level: 85, expertise: 'Expert' }
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML', level: 60, expertise: 'Basic' },
        { name: 'CSS', level: 80, expertise: 'Advanced' },
        { name: 'JavaScript', level: 75, expertise: 'Intermediate' },
        { name: 'TypeScript', level: 60, expertise: 'Basic' },
        { name: 'Bootstrap', level: 70, expertise: 'Intermediate' },
        { name: 'React', level: 60, expertise: 'Basic' },
        { name: 'Tailwind CSS', level: 60, expertise: 'Basic' }
      ]
    }
  ];

  const getExpertiseColor = (expertise: string) => {
    switch (expertise) {
      case 'Expert':
        return 'text-green-400';
      case 'Advanced':
        return 'text-blue-400';
      case 'Intermediate':
        return 'text-yellow-400';
      case 'Basic':
        return 'text-orange-400';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <section id="skills" className="py-20 section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Services 🛠️
          </h2>
          <p className="text-xl text-muted-foreground">
            My Technical Level
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-glow">
              <CardHeader>
                <CardTitle className="text-xl text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{skill.name}</h4>
                      <span className={`text-sm font-medium ${getExpertiseColor(skill.expertise)}`}>
                        {skill.expertise}
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;