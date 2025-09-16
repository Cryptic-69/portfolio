import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce API Platform",
      description: "Scalable microservices architecture handling 100k+ daily transactions with Redis caching and PostgreSQL.",
      tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
      github: "#",
      live: "#",
      status: "Production"
    },
    {
      title: "Real-time Chat System",
      description: "WebSocket-based messaging platform with end-to-end encryption and room management.",
      tech: ["Socket.io", "MongoDB", "JWT", "React", "AWS"],
      github: "#",
      live: "#",
      status: "Active"
    },
    {
      title: "Analytics Dashboard API",
      description: "High-performance data processing pipeline with real-time analytics and automated reporting.",
      tech: ["Python", "FastAPI", "Kafka", "ClickHouse", "Kubernetes"],
      github: "#",
      live: "#",
      status: "Beta"
    },
    {
      title: "Authentication Service",
      description: "OAuth 2.0 compliant identity service with multi-factor authentication and SSO integration.",
      tech: ["Go", "gRPC", "PostgreSQL", "Redis", "Vault"],
      github: "#",
      live: "#",
      status: "Production"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 font-medium">
            <span className="text-muted-foreground font-mono">{"/* "}</span>
            Featured Projects
            <span className="text-muted-foreground font-mono">{" */"}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of backend systems and APIs I've architected and developed
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs text-muted-foreground font-mono">{project.status}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={project.github}>
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={project.live}>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}