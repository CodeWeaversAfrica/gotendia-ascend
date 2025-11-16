import { Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Software Outsourcing in Africa",
    excerpt: "Explore how African tech talent is reshaping the global software industry and why companies are increasingly looking to the continent for their development needs.",
    date: "November 15, 2025",
    category: "Industry Insights",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Building High-Performance Engineering Teams: A Complete Guide",
    excerpt: "Learn the strategies and best practices for assembling world-class engineering teams that deliver exceptional results consistently.",
    date: "November 10, 2025",
    category: "Team Building",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "AI Integration: Transforming Businesses in 2025",
    excerpt: "Discover how artificial intelligence and machine learning are revolutionizing business operations and creating new opportunities for growth.",
    date: "November 5, 2025",
    category: "Technology",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Mobile-First Development: Why It Matters",
    excerpt: "Understanding the importance of mobile-first approach in modern application development and how it impacts user experience and business success.",
    date: "October 28, 2025",
    category: "Development",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Scaling Your Startup: When to Outsource Development",
    excerpt: "Strategic insights on when and how startups should consider outsourcing their software development to accelerate growth and reduce costs.",
    date: "October 20, 2025",
    category: "Startups",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "The Role of UX/UI Design in Business Success",
    excerpt: "How exceptional design creates competitive advantages and drives business growth through improved user engagement and satisfaction.",
    date: "October 15, 2025",
    category: "Design",
    readTime: "5 min read",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Insights & Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert perspectives on software development, outsourcing, and technology trends
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button variant="link" className="mt-4 p-0 text-primary hover:text-primary/80">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Want to stay updated with our latest insights?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
