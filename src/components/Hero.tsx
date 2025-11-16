import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="grain-gradient pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-5xl">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground">
              Software Outsourcing Excellence
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Africa's Fastest Growing{" "}
            <span className="text-primary">Software Outsourcing Company</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            High-performance software and expert teams that help you scale, innovate, and win. 
            Transform your business with Africa's premier software outsourcing partner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Build Your Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" variant="outline" className="border-2">
                Explore Services
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
