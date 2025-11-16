import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Gotendia</h3>
            <p className="text-background/80 text-sm">
              Africa's fastest growing software outsourcing company. Building world-class teams and exceptional software.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Software Outsourcing
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  AI & IoT
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <Link to="/blog" className="text-background/80 hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:info@gotendia.com" className="text-background/80 hover:text-background transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-background/80">
              Nairobi, Kenya<br />
              East Africa
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-background/80">
          <p>&copy; {currentYear} Gotendia Limited. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
