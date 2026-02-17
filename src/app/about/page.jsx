"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
// import profileImage from "/images/Professional_developer_headshot_76b15bb7.png";

const skills = [
  "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
  "AWS", "Docker", "GraphQL", "Tailwind CSS", "Next.js"
];

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Lead development of modern web applications using React and TypeScript."
  },
  {
    title: "Full Stack Developer", 
    company: "Digital Agency",
    period: "2020 - 2022",
    description: "Built scalable web solutions for clients across various industries."
  },
  {
    title: "Junior Developer",
    company: "StartupXYZ",
    period: "2019 - 2020", 
    description: "Contributed to product development and learned modern development practices."
  }
];

export default function About() {
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
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4" data-testid="text-about-title">
            About Me
          </h1>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto" data-testid="text-about-subtitle">
            Get to know more about my journey, skills, and experience in software development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="hover-elevate">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={'/images/Professional_developer_headshot_76b15bb7.png'}
                    alt="Profile"
                    className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-border"
                    data-testid="img-profile"
                  />
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4" data-testid="text-profile-name">
                    John Developer
                  </h2>
                  <p className="text-muted-foreground leading-relaxed" data-testid="text-profile-bio">
                    Passionate full-stack developer with 5+ years of experience creating 
                    modern web applications. I love turning complex problems into simple, 
                    beautiful, and intuitive solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Skills */}
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-4" data-testid="text-skills-title">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-sm"
                      data-testid={`badge-skill-${index}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6" data-testid="text-experience-title">
                  Experience
                </h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4" data-testid={`card-experience-${index}`}>
                      <h4 className="font-semibold text-foreground" data-testid={`text-experience-title-${index}`}>
                        {exp.title}
                      </h4>
                      <p className="text-primary font-medium" data-testid={`text-experience-company-${index}`}>
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground mb-2" data-testid={`text-experience-period-${index}`}>
                        {exp.period}
                      </p>
                      <p className="text-muted-foreground" data-testid={`text-experience-description-${index}`}>
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}