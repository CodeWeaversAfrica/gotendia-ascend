import { CheckCircle, Zap, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Get your team up and running in days, not months. Our streamlined process ensures quick integration.",
  },
  {
    icon: Users,
    title: "Expert Talent Pool",
    description: "Access Africa's top 5% of software engineers, rigorously vetted and continuously trained.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "200+ successful projects delivered across 15+ countries with 98% client satisfaction.",
  },
  {
    icon: CheckCircle,
    title: "Cost-Effective Excellence",
    description: "Premium quality at competitive rates. Reduce costs by up to 60% without compromising on quality.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why Choose Gotendia?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Partner with Africa's most trusted software outsourcing company
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Scale Your Team?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join leading companies worldwide who trust Gotendia to build their engineering teams and deliver exceptional software solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-background px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-background px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              <div className="bg-background px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-primary">ISO</div>
                <div className="text-sm text-muted-foreground">Certified Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
