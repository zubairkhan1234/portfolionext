'use client';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ProjectCard from "./ProjectCard";
// import projectImage1 from "@assets/generated_images/Project_mockup_screenshot_0906e5e0.png";
// import projectImage2 from "@assets/generated_images/Mobile_app_mockup_01ea5a9a.png";

// TODO: Replace with real project data - featured projects only
const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payments.",
    image: '/images/Project_mockup_screenshot_0906e5e0.png',
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    title: "Task Management App", 
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: '/images/Mobile_app_mockup_01ea5a9a.png',
    technologies: ["React Native", "Firebase", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    title: "Analytics Dashboard",
    description: "A comprehensive analytics dashboard for businesses to track KPIs and visualize data trends.",
    image: '/images/Project_mockup_screenshot_0906e5e0.png',
    technologies: ["Next.js", "D3.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  }
];

export default function ProjectsPreview() {
  return (
    <section id="projects-section" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4" data-testid="text-projects-preview-title">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-preview-subtitle">
            A showcase of my recent work and creative solutions to real-world problems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/projects">
            <Button size="lg" data-testid="button-projects-preview-view-all">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}