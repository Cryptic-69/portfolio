import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Award } from 'lucide-react';

export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Mumbai",
      location: "Mumbai, India",
      period: "2021 - 2024",
      gpa: "7.0/10.0",
      description: "Focused on software engineering, algorithms, and database systems. Graduated Magna Cum Laude.",
      coursework: ["Data Structures", "Algorithms", "Database Design", "Software Engineering", "Computer Networks"],
      achievements: [
        "Built an impressive final-year project",
        "Favored by teachers for dedication",
        "Led Student Council events"
      ]
    },
    {
      degree: "AWS Certified Solutions Architect",
      school: "Amazon Web Services",
      location: "Online",
      period: "2025",
      description: "Professional certification demonstrating expertise in designing distributed systems on AWS.",
      coursework: ["Cloud Architecture", "Security", "Cost Optimization", "Performance", "Reliability"],
      achievements: [
        "Passed with 920/1000 score",
        "Specialized in serverless architectures"
      ]
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Docker Certified Associate",
    "Kubernetes Application Developer",
    "MongoDB Certified Developer"
  ];

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
    <section className="py-20" id="education">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 font-medium">
            <span className="text-muted-foreground font-mono">{"<!-- "}</span>
            Education & Certifications
            <span className="text-muted-foreground font-mono">{" -->"}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and professional certifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {education.map((edu, index) => (
              <Card key={edu.degree} className="bg-card/50 border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl flex items-center gap-2">
                        <GraduationCap className="h-5 w-5" />
                        {edu.degree}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                        <span>{edu.school}</span>
                        <span>•</span>
                        <span>{edu.location}</span>
                        {edu.gpa && (
                          <>
                            <span>•</span>
                            <span>GPA: {edu.gpa}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <Badge variant="outline">{edu.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="leading-relaxed">
                    {edu.description}
                  </CardDescription>
                  
                  <div>
                    <h4 className="mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-1">
                      {edu.coursework.map((course) => (
                        <Badge key={course} variant="secondary" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">★</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Professional Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={cert}
                      className="flex items-center gap-3 p-3 bg-accent/30 rounded-lg border border-border/30"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}