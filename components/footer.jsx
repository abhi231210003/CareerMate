"use client"

import Link from "next/link"
import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "./ui/button"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              SENSAI
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              AI-powered career coaching for resumes, cover letters, interview prep, and industry insights in one personalized workflow.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://twitter.com" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://github.com" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="mailto:hello@sensai.ai" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/dashboard" className="text-muted-foreground transition-colors hover:text-foreground">Dashboard</Link></li>
              <li><Link href="/resume" className="text-muted-foreground transition-colors hover:text-foreground">Resume Builder</Link></li>
              <li><Link href="/ai-cover-letter" className="text-muted-foreground transition-colors hover:text-foreground">Cover Letters</Link></li>
              <li><Link href="/interview" className="text-muted-foreground transition-colors hover:text-foreground">Interview Prep</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#features" className="text-muted-foreground transition-colors hover:text-foreground">Powerful Features</Link></li>
              <li><Link href="#how-it-works" className="text-muted-foreground transition-colors hover:text-foreground">How It Works</Link></li>
              <li><Link href="#testimonials" className="text-muted-foreground transition-colors hover:text-foreground">What Users Say</Link></li>
              <li><Link href="#faqs" className="text-muted-foreground transition-colors hover:text-foreground">FAQs</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/40 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 SENSAI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Made with ❤️ by Abhishek</span>
            <Button variant="ghost" size="icon" onClick={scrollToTop} aria-label="Scroll to top">
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
