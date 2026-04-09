'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Coffee, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const highlights = [
  {
    icon: Code,
    title: "5+ Years Experience",
    description: "Building modern web applications"
  },
  {
    icon: Coffee,
    title: "Passionate Developer",
    description: "Love turning ideas into reality"
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Creative solutions to complex challenges"
  }
];

export default function AboutPreview() {
  return (
    <section id="about-section" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="text-about-preview-title">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-about-preview-subtitle">
            Passionate developer with a love for creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <Image
              src={'/images/Professional_developer_headshot_76b15bb7.png'}
              alt="Muhammad Zubair"
              width={256}
              height={256}
              className="w-64 h-64 rounded-full object-cover mx-auto lg:mx-0 mb-8 border-4 border-border"
              data-testid="img-about-preview-profile"
            />
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4" data-testid="text-about-preview-name">
              Muhammad Zubair
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8" data-testid="text-about-preview-bio">
              Full-stack developer with 5+ years of experience creating modern web applications. 
              I specialize in React, TypeScript, and Node.js, with a passion for clean code and user-centered design.
            </p>
            <Link href="/about">
              <Button size="lg" data-testid="button-about-preview-learn-more">
                Learn More About Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2" data-testid={`text-about-highlight-title-${index}`}>
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground" data-testid={`text-about-highlight-description-${index}`}>
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}