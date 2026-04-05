import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, Zap, MessageSquare } from 'lucide-react';

const projects = [
  {
    title: 'DAAKit One: Multi-Channel Aggregator',
    description: 'A robust eCommerce command center that synchronizes orders and shipments across 15+ major channels like Amazon, Shopify, and Myntra. Engineered a unified dashboard to eliminate manual errors and optimize order allocation using smart routing logic.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Omnichannel Logic'],
    link: 'https://daakit.com/',
    github: '#',
    icon: <Layers size={24} />
  },
  {
    title: 'DAAKit Go: Instant & Same-Day Delivery',
    description: 'An advanced last-mile delivery engine powering D2C brands with hyperlocal intelligence. Implemented real-time order tracking and a dark store network architecture to enable same-day delivery speeds and predictive route planning.',
    tech: ['Node.js', 'AWS EC2', 'Real-time Tracking', 'Logistics Tech'],
    link: 'https://daakit.com/',
    github: '#',
    icon: <Zap size={24} />
  },
  {
    title: 'DAAKit CX: Customer Experience Suite',
    description: 'A unified communication hub (WhatsApp, SMS, Email) designed to maximize customer trust. Features an automated NDR (Non-Delivery Report) engagement engine with intelligent retry logic and real-time NPS tracking.',
    tech: ['Node.js', 'WhatsApp API', 'Automated Workflows', 'Customer Analytics'],
    link: 'https://daakit.com/',
    github: '#',
    icon: <MessageSquare size={24} />
  }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-10 px-6 bg-primary">
            <div className="max-w-6xl mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black mb-10 flex items-center justify-end gap-4 text-text uppercase tracking-tighter text-right"
                >
                      Projects
                    <span className="h-px bg-secondary/20 flex-grow"></span>
                  
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-6 md:p-8 rounded-3xl bg-secondary/5 border border-secondary/10 hover:border-accent/40 transition-all duration-500 flex flex-col h-full"

                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="p-4 rounded-2xl bg-accent/10 text-accent group-hover:scale-110 transition-all">
                                    {project.icon}
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.github} className="text-secondary hover:text-accent transition-colors">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                            <path d="M9 18c-4.51 2-5-2-7-2" />
                                        </svg>
                                    </a>
                                    <a href={project.link} className="text-secondary hover:text-accent transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-black text-text mb-4 group-hover:text-accent transition-colors tracking-tighter uppercase">
                                {project.title}
                            </h3>
                            
                            <p className="text-secondary text-sm md:text-base leading-relaxed mb-8 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-6 border-t border-secondary/10 mt-auto">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1.5 rounded-xl bg-primary/50 border border-secondary/5 text-accent text-[10px] font-black uppercase tracking-widest hover:border-accent/40 transition-all">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Projects;
