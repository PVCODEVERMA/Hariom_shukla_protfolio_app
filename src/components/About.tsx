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
              I am a results-driven <span className="text-accent underline decoration-secondary/30">Software Engineer</span> with <span className="text-accent font-bold">2+ years</span> of hands-on experience building and scaling full-stack applications, with a strong focus on <span className="text-accent font-bold">backend systems</span>, system design, and performance optimization.
            </p>

            <p className="text-lg md:text-xl text-secondary leading-relaxed">
              Currently working as a <span className="text-accent font-bold">Tech Lead at Daakit</span>, I design and develop scalable logistics platforms including WMS, aggregator systems, courier platforms, and analytics, planning, and forecasting systems. My work involves solving real-world operational challenges by building reliable, high-performance systems used in production environments.
            </p>

            <p className="text-lg md:text-xl text-secondary leading-relaxed">
              I specialize in <span className="text-accent font-bold">Node.js</span> and <span className="text-accent font-bold">API architecture</span>, with strong experience in building distributed systems and optimizing workflows at scale. Additionally, I work with <span className="text-accent font-bold">.NET</span> to develop secure, high-performance backend solutions. On the frontend, I leverage <span className="text-accent font-bold">React</span> to create seamless, scalable, and efficient user experiences.
            </p>

            <p className="text-lg md:text-xl text-secondary leading-relaxed">
              Beyond development, I have strong expertise in <span className="text-accent font-bold">Linux, AWS, and GCP</span>, and actively work in the <span className="text-accent font-bold">DevOps</span> space—handling infrastructure, automation, CI/CD pipelines, and production deployments using tools like Docker and Ansible. I take ownership of end-to-end system design ensuring scalability, reliability, and performance across all layers of the stack.
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
