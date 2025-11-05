import { Code2, Box, Rocket, TrendingUp, Activity, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "AI-gile: SDLC Accelerator",
    description: "Developed an AI-powered tool that automates the SDLC kickoff process by converting a Product Requirement Document (PRD) into epics & features, user stories, technical design documents, and screen mockups in one click, reducing project initiation time by 90%.",
    highlights: [
      "Reduced manual effort by over $50K per project",
      "Improved cross-team alignment",
      "Accelerated delivery timelines by several months"
    ],
    icon: <Rocket className="h-5 w-5" />
  },
  {
    title: "ARShelf – Furnish with Augmented Reality",
    description: "Led a development team of four in creating a web application that integrates 3D and Augmented Reality capabilities, enhancing user experience by allowing real-time product customization without needing physical store visits.",
    highlights: [
      "Technologies Used: React JS, Express JS, Three JS, MongoDB, AWS S3, and Firebase hosting",
      "Co-authored a technical paper in the Journal of Web Development and Web Designing V7 I2, 2022, published in Mat Journal"
    ],
    icon: <Box className="h-5 w-5" />
  },
  {
    title: "Product Manager - Market & Partnership Strategy | BIG, UIUC",
    description: "Led U.S. market + competitive analysis of ECG, wearables, and fitness OEM space to support Medical-AI's expansion strategy.",
    highlights: [
      "Built a partner evaluation matrix and prioritized OEMs (e.g., Life Fitness) for hardware-integrated AI ECG workflows",
      "Synthesized product + regulatory considerations to propose B2B/B2B2C GTM, highlighting revenue potential across gyms, OEM channels, and clinical services"
    ],
    icon: <TrendingUp className="h-5 w-5" />
  },
  {
    title: "Smartwatch-Gesture Ping-Pong | Winner — UIUC Research Park Hackathon",
    description: "Designed a gesture-controlled mobile ping-pong game using smartwatch motion data (accelerometer + gyroscope).",
    highlights: [
      "Implemented real-time BLE streaming + gesture recognition to map swings → paddle actions with minimal input latency",
      "Delivered an engaging arcade-style interface; recognized as Hackathon Winner for novel wearable interaction + gameplay design"
    ],
    icon: <Activity className="h-5 w-5" />
  },
  {
    title: "Project: SDM Comparison Utility — Barclays",
    description: "Earned global recognition for developing a Python-based utility that reduced report processing time from ~6 hours to ~1 minute.",
    highlights: [
      "Standardized post-deployment data-consistency checks",
      "Improved reconciliation accuracy across departments"
    ],
    icon: <Code2 className="h-5 w-5" />
  },
  {
    title: "Stock Market Analysis and Forecasting",
    description: "Designed a web app to analyze and predict the Stock Market values using LSTM and Regression models.",
    highlights: [
      "Trained and fine-tuned a RNN-based model to forecast a stock's peak and low with an accuracy of 93%"
    ],
    icon: <BarChart className="h-5 w-5" />
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Innovative solutions and impactful technical implementations
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg mt-1">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {project.highlights.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    className="flex items-center gap-3 text-muted-foreground leading-relaxed"
                  >
                    <span className="text-primary flex-shrink-0">▹</span>
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

export default Projects;

