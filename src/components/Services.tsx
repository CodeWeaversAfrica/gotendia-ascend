import { Code, Palette, Cpu, Smartphone, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "Software Outsourcing",
    description: "World-class engineering teams that integrate seamlessly with your business. Scale faster with our expert developers.",
    features: ["Staff Augmentation", "Dedicated Teams", "Project-Based", "Flexible Scaling"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Create engaging mobile experiences with our expert team. iOS, Android, and cross-platform development.",
    features: ["Native iOS & Android", "React Native", "Flutter Development", "App Store Optimization"],
  },
  {
    icon: Code,
    title: "Web Development",
    description: "From responsive websites to complex web applications, we deliver cutting-edge solutions that drive your business forward.",
    features: ["React & Next.js", "Full-stack Development", "E-commerce Solutions", "Performance Optimization"],
  },
  {
    icon: Cpu,
    title: "AI & IoT Integration",
    description: "Transform your business with intelligent IoT solutions and AI-powered automation.",
    features: ["Machine Learning", "IoT Development", "AI Automation", "Data Analytics"],
  },
  {
    icon: Palette,
    title: "Brand & Design",
    description: "From brand identity to event execution, we create memorable experiences that resonate with your audience.",
    features: ["Brand Identity", "UI/UX Design", "Event Management", "Digital Marketing"],
  },
  {
    icon: Shield,
    title: "Security & Infrastructure",
    description: "Enterprise-grade security solutions and robust infrastructure to protect and scale your applications.",
    features: ["Security Audits", "Cloud Migration", "DevOps & CI/CD", "Performance Monitoring"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Discuss Your Project
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
