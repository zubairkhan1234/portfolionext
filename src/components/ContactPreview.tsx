'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "hello@johndeveloper.com",
    href: "mailto:hello@johndeveloper.com"
  },
  {
    icon: Phone,
    title: "Phone",
    description: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    title: "Location",
    description: "San Francisco, CA",
    href: "#"
  }
];

export default function ContactPreview() {
  const handleContactMethod = (href: string, title: string) => {
    console.log(`${title} contact method clicked`);
    if (href !== "#") {
      window.open(href, "_blank");
    }
  };

  return (
    <section id="contact-section" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="text-contact-preview-title">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-preview-subtitle">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover-elevate cursor-pointer" onClick={() => handleContactMethod(method.href, method.title)}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground" data-testid={`text-contact-method-title-${index}`}>
                        {method.title}
                      </h4>
                      <p className="text-muted-foreground" data-testid={`text-contact-method-description-${index}`}>
                        {method.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <Card className="hover-elevate">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4" data-testid="text-contact-preview-cta-title">
                  Ready to Start a Project?
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8" data-testid="text-contact-preview-cta-description">
                  Whether you have a specific project in mind or just want to explore possibilities, 
                  I'm here to help bring your ideas to life with clean code and modern design.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto" data-testid="button-contact-preview-get-in-touch">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}