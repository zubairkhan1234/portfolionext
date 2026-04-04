'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  liveUrl, 
  githubUrl,
  index 
}: ProjectCardProps) {
  const handleLiveDemo = () => {
    console.log(`Live demo clicked for ${title}`);
    if (liveUrl && typeof window !== "undefined") {
      window.open(liveUrl, "_blank");
    }
  };

  const handleGithubView = () => {
    console.log(`Github clicked for ${title}`);
    if (githubUrl && typeof window !== "undefined") {
      window.open(githubUrl, "_blank");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="h-full hover-elevate group overflow-hidden">
        <div className="relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={400}
            height={192}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            data-testid={`img-project-${index}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <CardContent className="p-6 flex flex-col justify-between h-full">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-foreground" data-testid={`text-project-title-${index}`}>
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed" data-testid={`text-project-description-${index}`}>
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, techIndex) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="text-xs"
                  data-testid={`badge-project-tech-${index}-${techIndex}`}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2 mt-6">
            {liveUrl && (
              <Button 
                size="sm" 
                onClick={handleLiveDemo}
                data-testid={`button-project-live-${index}`}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            )}
            {githubUrl && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleGithubView}
                data-testid={`button-project-github-${index}`}
              >
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}