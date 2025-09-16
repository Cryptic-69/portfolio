import { motion } from 'motion/react';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export function ThankYouSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
          >
            <Heart className="h-8 w-8 text-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl"
          >
            Thank You for Visiting
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            I appreciate you taking the time to explore my portfolio. 
            Whether you're looking for a backend developer, have a project in mind, 
            or just want to connect, I'd love to hear from you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground space-y-2"
          >
            <p>Built with ❤️ using React, TypeScript, and Tailwind CSS</p>
            <p className="font-mono text-xs">
              <span className="text-muted-foreground">{"console.log("}</span>
              <span className="text-primary">"Thanks for stopping by!"</span>
              <span className="text-muted-foreground">{")"}</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <Button 
              variant="outline" 
              size="sm" 
              onClick={scrollToTop}
              className="gap-2 border-border/50 hover:bg-accent"
            >
              <ArrowUp className="h-4 w-4" />
              Back to Top
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 pt-8 border-t border-border/30"
      >
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Ved Zende. All rights reserved.</p>
            <p className="mt-2">
              Made with passion for clean code and scalable architectures
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}