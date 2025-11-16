import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, Heart, TrendingUp, Users, Zap } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      location: "Nairobi, Kenya / Remote",
      type: "Full-time",
      department: "Engineering",
      description: "Join our team to build scalable web applications using React, Node.js, and cloud technologies.",
    },
    {
      title: "Mobile App Developer (React Native)",
      location: "Remote",
      type: "Full-time",
      department: "Engineering",
      description: "Create beautiful cross-platform mobile experiences for our global clients.",
    },
    {
      title: "UI/UX Designer",
      location: "Nairobi, Kenya / Hybrid",
      type: "Full-time",
      department: "Design",
      description: "Design intuitive and engaging user experiences for web and mobile applications.",
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      department: "Engineering",
      description: "Build and maintain CI/CD pipelines and cloud infrastructure for our projects.",
    },
    {
      title: "AI/ML Engineer",
      location: "Nairobi, Kenya / Remote",
      type: "Full-time",
      department: "AI & Innovation",
      description: "Develop intelligent solutions using machine learning and artificial intelligence.",
    },
    {
      title: "Project Manager",
      location: "Nairobi, Kenya",
      type: "Full-time",
      department: "Operations",
      description: "Lead client projects from inception to delivery, ensuring quality and timelines.",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career progression paths and continuous learning opportunities",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented engineers and designers from around the world",
    },
    {
      icon: Zap,
      title: "Cutting-Edge Tech",
      description: "Work on modern tech stacks and innovative projects",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote-friendly policies",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="grain-gradient pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
              Build Your Career with Africa's Leading Tech Team
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Join a fast-growing team of innovators shaping the future of software development across Africa and beyond.
            </p>
            <Button size="lg" className="text-lg px-8">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Join Gotendia?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're building something special. Be part of a team that's redefining software outsourcing in Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your perfect role and start making an impact today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <CardDescription className="text-base mb-4">
                        {position.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {position.department}
                        </div>
                      </div>
                    </div>
                    <Button className="sm:self-start whitespace-nowrap">
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Don't See the Right Role?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Send Your Resume
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
