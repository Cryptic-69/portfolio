import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, Calendar } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Backend Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead backend development for high-traffic applications serving 2M+ users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Reduced API response time by 60% through optimization",
        "Led migration to microservices architecture",
        "Implemented CI/CD pipelines reducing deployment time by 80%"
      ],
      tech: ["Node.js", "PostgreSQL", "Docker", "Kubernetes", "AWS"]
    },
    {
      title: "Backend Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Developed scalable APIs and database systems for a growing fintech startup. Built real-time payment processing system.",
      achievements: [
        "Built payment processing system handling $10M+ monthly",
        "Designed event-driven architecture with 99.9% uptime",
        "Integrated 15+ third-party APIs and services"
      ],
      tech: ["Python", "FastAPI", "MongoDB", "Redis", "GCP"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Pro",
      location: "Remote",
      period: "2019 - 2020",
      description: "Developed web applications for various clients. Focused on backend API development and database design.",
      achievements: [
        "Delivered 20+ client projects on time and budget",
        "Implemented automated testing reducing bugs by 70%",
        "Created reusable API framework used across projects"
      ],
      tech: ["PHP", "Laravel", "MySQL", "Vue.js", "DigitalOcean"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20" id="experience">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 font-medium">
            <span className="text-muted-foreground font-mono">{"// "}</span>
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional journey building scalable backend systems
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
            >
              <Card className="bg-card/50 border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{exp.company}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="leading-relaxed">
                    {exp.description}
                  </CardDescription>
                  
                  <div>
                    <h4 className="mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-2">
                    {exp.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
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