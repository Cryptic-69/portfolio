import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Send, User, Cpu, Code, Activity } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';


export function AboutContactSection() {
const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const skills = [
    "Node.js",
    "Python",
    "Go",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "Microservices",
    "GraphQL",
    "REST APIs",
    "gRPC",
    "Apache Kafka",
    "RabbitMQ",
    "Elasticsearch",
  ];

  const interests = [
    { icon: Code, label: "Open Source", desc: "Contributing to projects" },
    { icon: Cpu, label: "IOT", desc: "Playing with smart components" },
    { icon: Activity, label: "Hobbies", desc: "Literally every hobby" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_vc2hr73", // EmailJS service ID
        "template_klx7kpm", // EmailJS template ID
        formRef.current,
        "iY3BC1Cg2ThVFsoml" // EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Try again later.");
        }
      );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 font-medium">
            <span className="text-muted-foreground font-mono">{"{ "}</span>
            About Me & Contact
            <span className="text-muted-foreground font-mono">{" }"}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know me better and let's start a conversation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="leading-relaxed">
                  I’m a passionate backend developer eager to build scalable and
                  secure systems. I enjoy solving problems and creating
                  efficient solutions that can grow and handle real-world
                  challenges.
                </CardDescription>
                <CardDescription className="leading-relaxed">
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open source projects, or
                  enjoying a perfectly brewed cup of coffee while reading
                  mystrey novels.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 bg-accent/30 rounded-lg"
                    >
                      <interest.icon className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm">{interest.label}</div>
                        <div className="text-xs text-muted-foreground">
                          {interest.desc}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 border-border/50 h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Get In Touch
                </CardTitle>
                <CardDescription>
                  Have a project in mind? Let's discuss how we can work
                  together.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="user_name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="bg-input-background border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="user_email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-input-background border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={6}
                      className="bg-input-background border-border/50 resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border/50 text-center">
                  <p className="text-sm text-muted-foreground">
                    Typically responds within 24 hours
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-muted-foreground font-mono">
                      Currently available
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
