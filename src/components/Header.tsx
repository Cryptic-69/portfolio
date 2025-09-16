import { Github, Linkedin, Download, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Header() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Set initial dark mode
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handleResumeDownload = () => {
    // Mock resume download - replace with actual resume file
    const link = document.createElement('a');
    link.href = '/Ved Zende Resume.pdf';
    link.download = 'VedZende-resume.pdf';
    link.click();
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-xl tracking-tight font-mono">
            <span className="text-muted-foreground">{"<"}</span>
            <span className="text-primary">Ved</span>
            <span className="text-foreground">Zende</span>
            <span className="text-muted-foreground">{" />"}</span>
          </h1>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="hover:bg-accent"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:bg-accent"
          >
            <a href="https://github.com/Cryptic-69" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:bg-accent"
          >
            <a href="https://www.linkedin.com/in/ved-zende-247forwork/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleResumeDownload}
            className="gap-2 border-border/50 hover:bg-accent"
          >
            <Download className="h-3 w-3" />
            Resume
          </Button>
        </motion.nav>
      </div>
    </motion.header>
  );
}