'use client'
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/johndeveloper",
    label: "GitHub"
  },
  {
    icon: Linkedin, 
    href: "https://linkedin.com/in/johndeveloper",
    label: "LinkedIn"
  },
  {
    icon: Twitter,
    href: "https://twitter.com/johndeveloper",
    label: "Twitter"
  },
  {
    icon: Mail,
    href: "mailto:hello@johndeveloper.com",
    label: "Email"
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (href: string, label: string) => {
    console.log(`${label} link clicked`);
    if (typeof window !== "undefined") {
      window.open(href, "_blank");
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <h3 className="font-serif font-bold text-xl text-foreground mb-2" data-testid="text-footer-logo">
              Portfolio
            </h3>
            <p className="text-muted-foreground text-sm" data-testid="text-footer-copyright">
              © {currentYear} John Developer. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social, index) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                onClick={() => handleSocialClick(social.href, social.label)}
                data-testid={`button-social-${social.label.toLowerCase()}`}
                className="hover:text-primary transition-colors"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm" data-testid="text-footer-description">
            Crafting exceptional digital experiences with modern technologies and clean design.
          </p>
        </div>
      </div>
    </footer>
  );
}