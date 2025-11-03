import { Briefcase, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    company: "Country Financial",
    role: "Software Developer Intern",
    location: "Champaign, USA",
    period: "May 2025 – Present",
    highlights: [
      "Built enterprise-scale ETL pipelines with Azure Data Factory, reducing data processing time by 70%",
      "Migrated datasets from Hive to Apache Iceberg, reducing query latency by ~50%",
      "Created Power BI dashboards for business performance tracking and KPI visualization",
      "Performed data analysis on product usage metrics to inform feature prioritization"
    ],
    icon: <Briefcase className="h-5 w-5" />
  },
  {
    company: "Barclays",
    role: "Analyst",
    location: "Pune, India",
    period: "Aug 2022 – Jul 2024",
    highlights: [
      "Optimized SQL query architecture, improving API response times by over 1.5 seconds",
      "Developed Tableau dashboards detecting 50+ critical operational bottlenecks monthly",
      "Earned global recognition for Python-based SDM Comparison Utility reducing processing from 6 hours to 1 minute",
      "Architected Spring Boot microservices reducing operational costs by 20%",
      "Implemented automated testing frameworks (JUnit, Selenium) slashing QA cycles by 40%",
      "Partnered with DevOps for Docker/Kubernetes containerization with CI/CD pipelines"
    ],
    icon: <Briefcase className="h-5 w-5" />
  },
  {
    company: "Zenlive Media Pvt. Ltd.",
    role: "Software Developer Intern",
    location: "Mumbai, India",
    period: "Oct 2021 – Nov 2021",
    highlights: [
      "Improved UI/UX with server-side rendering in Next.js for faster webpage loading",
      "Conducted A/B testing increasing click-through rates by 20%"
    ],
    icon: <TrendingUp className="h-5 w-5" />
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Building scalable solutions and driving impact across organizations
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg mt-1">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-semibold text-lg">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {exp.location}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, hIndex) => (
                  <li 
                    key={hIndex}
                    className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                  >
                    <span className="text-primary mt-1 flex-shrink-0">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
