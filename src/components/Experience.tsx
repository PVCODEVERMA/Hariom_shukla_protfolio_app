import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

const experiences = [

    {
    company: 'Daakit Technologies Pvt. Ltd.',
    role: 'Tech Lead',
    period: 'April 2026 - Present',
    location: 'Onsite'
  },

    {
    company: 'Daakit Technologies Pvt. Ltd.',
    role: 'Senior FullStack Developer',
    period: 'Jan 2026 - March 2026',
    location: 'Onsite'
  },
  {
    company: 'Daakit Technologies Pvt. Ltd.',
    role: 'Junior Software Engineer',
    period: 'May 2025 - DEC 2025',
    location: 'Onsite'
  },
  {
    company: 'Stoild Private Limited',
    role: 'Junior Software Engineer',
    period: 'Jan 2024 - May 2025',
    location: 'Remote',
  
  }
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className=" py-10 px-6 bg-primary/20">
            <div className="max-w-6xl mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black mb-16 flex items-center gap-4 text-text uppercase tracking-tighter"
                >
                    Work Experience
                    <span className="h-px bg-secondary/20 flex-grow"></span>
                </motion.h2>

                <div className="space-y-10 relative before:content-[''] before:absolute before:left-0 md:before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-secondary/10 before:-z-10">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative md:pl-12 group"
                        >
                            {/* Point on timeline */}
                           

                            <div className="p-6 md:p-8 rounded-3xl bg-secondary/5 border border-secondary/10 hover:border-accent/40 transition-all duration-500">

                                <div className="flex flex-col gap-4 mb-8">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <h3 className="text-2xl md:text-3xl font-black text-text leading-tight group-hover:text-accent transition-colors">{exp.role}</h3>
                                        <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-[10px] font-black rounded-full border border-accent/20 uppercase tracking-widest self-start md:self-center">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <div className="flex items-center flex-wrap gap-4 text-secondary text-xs font-black uppercase tracking-widest">
                                        <span className="flex items-center gap-2 text-accent/80">
                                            <Briefcase size={14} /> {exp.company}
                                        </span>
                                        <span className="flex items-center gap-2 opacity-60">
                                            <MapPin size={14} /> {exp.location}
                                        </span>
                                    </div>
                                </div>
                                
                               
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Experience;
