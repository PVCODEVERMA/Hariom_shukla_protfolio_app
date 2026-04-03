import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="pt-[2px]  px-6 bg-primary/30">

      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black mb-16 flex items-center gap-4 text-text uppercase tracking-tighter"
        >
          About Me
          <span className="h-px bg-secondary/20 flex-grow"></span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <p className="text-xl md:text-2xl text-text leading-relaxed font-medium">
              I am a results-driven <span className="text-accent underline decoration-secondary/30">Software Engineer</span> with over <span className="text-accent font-bold">2+ years of hands-on experience</span> in designing and developing scalable full-stack applications.
            </p>
            
            <p className="text-lg md:text-xl text-secondary leading-relaxed">
              I specialize in building high-performance backend systems and seamless frontend experiences, with strong expertise in Node.js, system architecture, and API development.
            </p>
            
            <p className="text-lg md:text-xl text-secondary leading-relaxed">
              With a solid foundation in Linux and cloud platforms like AWS and GCP, I have expanded my capabilities into DevOps, focusing on infrastructure management and production-grade deployments.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 space-y-6 bg-secondary/5 border border-secondary/10 rounded-3xl backdrop-blur-md"
          >
            <h3 className="text-xl font-black text-text uppercase tracking-widest mb-6">Quick Stats</h3>
            <div className="grid grid-cols-1 gap-4">
              <StatItem label="Experience" value="2+ Years" />
              <StatItem label="Projects" value="10+ Done" />
              <StatItem label="Stack" value="Full-Stack" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ label, value }: { label: string; value: string }) => (
  <div className="p-5 rounded-2xl bg-primary/50 border border-secondary/5 flex flex-col gap-1 hover:border-accent/30 transition-all group">
    <span className="text-secondary/60 text-[10px] font-black uppercase tracking-widest">{label}</span>
    <span className="text-2xl font-black text-accent group-hover:translate-x-1 transition-transform">{value}</span>
  </div>
);


export default About;
