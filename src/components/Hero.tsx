import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import GridBackground from "./GridBackground";
import CodeBlock from "./CodeBlock";
import TechOrbit from "./TechOrbit";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <GridBackground />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up space-y-8">
          <div>
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4 ml-[2px] md:ml-[6px]">
  Software Developer | Technical Product Manager | Data Analyst
</p>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient-hero">
                Kinjal Parekh
              </span>
            </h1>
            <p className="text-xl md:text-base text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            <b>Half engineer, half strategist: All Execution.</b>
            <br />I turn ambiguity into architecture and chaos into delivery plans. Bridging business goals with backend logic, I make products, people, and systems scale (mostly without crashing). Currently pursuing my MS in Information Management at UIUC.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mb-10">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
              asChild
            >
              <a href="#contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10"
              asChild
            >
              <a href="#experience">
                View Experience
              </a>
            </Button>
          </div>
          
          <CodeBlock />

          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:kinjalp2@illinois.edu"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="text-sm">kinjalp2@illinois.edu</span>
            </a>
            <a 
              href="https://linkedin.com/in/kinjal-parekh11"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="text-sm">linkedin.com/in/kinjal-parekh11</span>
            </a>
            <a 
              href="tel:+14479027414"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="text-sm">+1 (447) 902-7414</span>
            </a>
          </div>
        </div>

        <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <TechOrbit />
        </div>
      </div>
    </section>
  );
};

export default Hero;
