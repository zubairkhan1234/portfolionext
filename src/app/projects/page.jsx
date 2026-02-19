'use client';
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

// TODO: Replace with real project data
const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payments, and an intuitive admin dashboard.",
    image: '/images/Project_mockup_screenshot_0906e5e0.png',
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    title: "Task Management App", 
    description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
    image: '/images/Mobile_app_mockup_01ea5a9a.png',
    technologies: ["React Native", "Firebase", "TypeScript", "Redux"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    title: "Analytics Dashboard",
    description: "A comprehensive analytics dashboard for businesses to track KPIs, visualize data trends, and generate automated reports with customizable widgets.",
    image: '/images/Project_mockup_screenshot_0906e5e0.png',
    technologies: ["Next.js", "D3.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    title: "Social Media API",
    description: "RESTful API for social media platform with user authentication, post management, real-time messaging, and comprehensive admin tools.",
    image: '/images/Mobile_app_mockup_01ea5a9a.png',
    technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    githubUrl: "https://github.com/example"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website with modern animations, dark/light mode toggle, and optimized performance for showcasing creative work.",
    image: '/images/Project_mockup_screenshot_0906e5e0.png',
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts, interactive maps, weather alerts, and beautiful animated weather icons.",
    image: '/images/Mobile_app_mockup_01ea5a9a.png',
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "PWA"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4" data-testid="text-projects-title">
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-subtitle">
            A collection of projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
      </div>
    </div>
  );
}