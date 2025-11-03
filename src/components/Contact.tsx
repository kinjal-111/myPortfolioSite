import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Phone, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's connect and discuss how we can work together
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50 flex flex-col justify-center items-center text-center">
          <div className="grid md:grid-cols-2 gap-8 w-full">
            {/* Left Side - Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 text-left md:text-center">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:kinjalp2@illinois.edu"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">kinjalp2@illinois.edu</p>
                  </div>
                </a>

                <a
                  href="tel:+14479027414"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+1 (447) 902-7414</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Side - Online Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 text-left md:text-center">
                Connect Online
              </h3>
              <div className="space-y-4">
                <Button
                  className="w-full justify-start h-auto p-4 bg-secondary/50 hover:bg-secondary text-foreground"
                  variant="outline"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/kinjal-parekh11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-medium">
                        linkedin.com/in/kinjal-parekh11
                      </p>
                    </div>
                  </a>
                </Button>

                <Button
                  className="w-full justify-start h-auto p-4 bg-secondary/50 hover:bg-secondary text-foreground"
                  variant="outline"
                  asChild
                >
                  <a
                    href="https://github.com/kinjal-111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="font-medium">View my projects</p>
                    </div>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Centered text inside card */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              I'm currently open to new opportunities and collaborations. <br />
              Whether you have a project in mind or just want to connect, feel
              free to reach out!
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
