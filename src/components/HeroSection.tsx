import { motion } from 'motion/react';
import { Code2, Terminal, Database } from 'lucide-react';

export function HeroSection() {
  const typewriterText = "Backend Developer";
  
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/50 rounded-full border border-border/50"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">Available for work</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl tracking-tight font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi, I'm <span className="text-primary">Ved</span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl text-muted-foreground font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
              className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-primary"
            >
              {typewriterText}
            </motion.span>
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            I craft robust server-side solutions, design scalable architectures, 
            and build APIs that power exceptional user experiences.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-8 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            {[
              { icon: Code2, label: "Clean Code" },
              { icon: Terminal, label: "DevOps" },
              { icon: Database, label: "Databases" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center gap-2 group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-3 bg-accent/50 rounded-lg border border-border/50 group-hover:bg-accent/70 transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}