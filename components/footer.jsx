"use client"
import Link from "next/link"
import Image from "next/image"
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  MapPin, 
  Phone,
  ArrowUp
} from "lucide-react"
import { Button } from "./ui/button"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/30 border-t border-border/40">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/logo.png" 
                alt="SENSAI Logo" 
                width={120} 
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empower your career journey with AI-powered guidance, personalized coaching, and professional growth tools.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://twitter.com/sensai" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="https://linkedin.com/company/sensai" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                href="https://github.com/sensai" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link 
                href="mailto:hello@sensai.ai" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/resume" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  AI Resume Builder
                </Link>
              </li>
              <li>
                <Link 
                  href="/cover-letter" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Cover Letter Generator
                </Link>
              </li>
              <li>
                <Link 
                  href="/interview" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Interview Preparation
                </Link>
              </li>
              <li>
                <Link 
                  href="/career-coaching" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Career Coaching
                </Link>
              </li>
              <li>
                <Link 
                  href="/industry-insights" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Industry Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/blog" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Career Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/guides" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Career Guides
                </Link>
              </li>
              <li>
                <Link 
                  href="/templates" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Resume Templates
                </Link>
              </li>
              <li>
                <Link 
                  href="/salary-insights" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Salary Insights
                </Link>
              </li>
              <li>
                <Link 
                  href="/faqs" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/contact" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/help" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/cookies" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
            
            {/* Contact Info */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@sensai.ai</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="border-t border-border/40 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest career tips and AI-powered insights delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/40 bg-muted/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-muted-foreground">
                © 2025 SENSAI. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span>Made with ❤️ by Abhishek</span>
                <span>•</span>
                <span>Powered by AI</span>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
