import { Card } from "@/components/ui/card";
import { GraduationCap, Trophy, Award } from "lucide-react"; // ← Added Trophy

const education = [
  {
    institution: "University of Illinois Urbana-Champaign",
    degree: "Master's in Information Management",
    location: "Illinois, USA",
    period: "Aug 2024 - Dec 2025",
    gpa: "CGPA 4.0/4.0",
    courses: ["Methods of Data Science", "Machine Learning and Cloud", "Data Warehouse and Business Intelligence"]
  },
  {
    institution: "K.J. Somaiya College of Engineering",
    degree: "Bachelor of Technology - Computer Science",
    location: "Mumbai, India",
    period: "Graduated Jun 2022",
    gpa: "CGPA 3.6/4.0",
    courses: ["Data Structure and Algorithm", "Operating System", "Relational Database Management"]
  },
  {
    institution: "Vivekanand Education Society's Polytechnic",
    degree: "Diploma in Computer Technology",
    location: "Mumbai, India",
    period: "Graduated Jun 2019",
    gpa: "CGPA 3.7/4.0",
    courses: ["Web Development", "Java", "Computer Vision"]
  }
];

const achievements = [
  "Selected to represent UIUC iSchool at Grace Hopper Celebration 2025 (GHC'25)",
  "Most Outstanding Graduate Intern Award finalist at UIUC Research Park (among 800+ interns across 120+ companies)",
  "Winner - Country Financial Hackathon for AI-gile SDLC Accelerator",
  "Global recognition at Barclays for SDM Comparison Utility innovation"
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic background and notable recognitions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    {edu.location}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{edu.period}</span>
                    <span className="text-primary font-semibold">{edu.gpa}</span>
                  </div>
                </div>
              </div>

              {edu.courses.length > 0 && (
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-2 font-medium">
                    Relevant Coursework:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-2 py-1 bg-secondary/50 text-foreground text-xs rounded border border-border/50"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Trophy className="h-6 w-6 text-primary" /> {/* Changed icon */}
            </div>
            <h3 className="text-2xl font-bold">Leadership & Achievements</h3>
          </div>
          
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 text-muted-foreground leading-relaxed"
              >
                <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default Education;
