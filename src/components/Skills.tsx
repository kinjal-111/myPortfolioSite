import { Card } from "@/components/ui/card";
import { Database, Cloud, Code, BarChart3 } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Frameworks",
    icon: <Code className="h-6 w-6" />,
    skills: ["Python", "Java", "JavaScript", "C++", "Spring Boot", "React", "Angular", "Django", "Next.js"]
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Apache Iceberg"]
  },
  {
    title: "Cloud Platforms",
    icon: <Cloud className="h-6 w-6" />,
    skills: ["Amazon Web Services (AWS)", "Microsoft Azure", "Azure Data Factory"]
  },
  {
    title: "BI & Analytics",
    icon: <BarChart3 className="h-6 w-6" />,
    skills: ["Tableau", "Power BI", "Advanced Excel"]
  },
  {
    title: "DevOps & Tools",
    icon: <Code className="h-6 w-6" />,
    skills: ["Docker & Kubernetes", "CI/CD Pipelines", "Git & Version Control", "JUnit & Selenium Testing"]
  },
  {
    title: "Architecture & APIs",
    icon: <Database className="h-6 w-6" />,
    skills: ["REST APIs", "Microservices Architecture", "ETL Workflows"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with to build powerful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-secondary/50 text-foreground text-sm rounded-md border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
