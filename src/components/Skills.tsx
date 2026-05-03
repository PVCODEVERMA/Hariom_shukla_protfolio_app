import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Cloud, Settings } from 'lucide-react';

const skills = [
    {
        category: 'Languages',
        icon: <Code size={20} />,
        items: ['JavaScript (ES6+)', 'C/C++']
    },
    {
        category: 'Frontend',
        icon: <Layout size={20} />,
        items: ['React.js', 'Tailwind CSS', 'HTML', 'CSS']
    },
    {
        category: 'Backend',
        icon: <Server size={20} />,
        items: ['Node.js', '.Net', 'Express.js', 'PHP CI'],

    },
    {
        category: 'Databases',
        icon: <Database size={20} />,
        items: ['MongoDB', 'MySQL', 'PostgreSQL']
    },
    {
        category: 'Cloud & DevOps',
        icon: <Cloud size={20} />,
        items: ['AWS', 'GCP', 'Docker', 'CI/CD', 'Ansible', 'Git', 'GitHub', 'Linux']
    },
    {
        category: 'Specialized Tech',
        icon: <Settings size={20} />,
        items: ["Warehouse Management System", "Courier Aggregator System", "Planning And Forecasting System", "Courier Platform"]
    }
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black my-10 flex items-center gap-4 text-text uppercase tracking-tighter"
                >
                    Skills
                    <span className="h-px bg-secondary/20 flex-grow"></span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-secondary/5 border border-secondary/10 hover:border-accent/40 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-500">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-widest text-text">{skill.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 rounded-xl bg-primary/50 border border-secondary/5 text-secondary text-xs font-bold uppercase tracking-widest hover:border-accent/30 hover:text-accent transition-all"
                                    >
                                        {item}
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

export default Skills;
