import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    institution: 'Gautam Buddha University',
    degree: 'Bachelor of Technology : Computer Science Engineering',
    period: '2020 - 2024',
    location: 'Greater Noida, India'
  },
  {
    institution: 'Central Public Academy',
    degree: 'Intermediate (Class 12th)',
    period: '2019',
    location: 'Gorakhpur, India'
  },
  {
    institution: "Naval's National Academy",
    degree: 'Secondary (Class 10th)',
    period: '2017',
    location: 'Gorakhpur, India'
  }
];

const certifications = [
  'Certificate of AWS Training : KR Network Cloud Technologies Pvt. Ltd.',
  'Certificate of Ansible Training : KR Network Cloud Technologies Pvt. Ltd.',
  'Certificate of Docker Training : KR Network Cloud Technologies Pvt. Ltd.',
  'Certificate of Linux Training : KR Network Cloud Technologies Pvt. Ltd.'
];

const Education: React.FC = () => {
    return (
        <section id="education" className="py-24 px-6 bg-primary/20">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Education Section */}
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-black mb-16 flex items-center gap-4 text-text uppercase tracking-tighter"
                        >
                            Education
                            <span className="h-px bg-secondary/20 flex-grow"></span>
                        </motion.h2>

                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 rounded-3xl bg-secondary/5 border border-secondary/10 hover:border-accent/40 transition-all duration-500"
                                >
                                    <h3 className="text-xl md:text-2xl font-black text-text mb-4 uppercase tracking-tight">{edu.degree}</h3>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-3 text-accent text-xs font-black uppercase tracking-widest">
                                            <GraduationCap size={16} /> {edu.institution}
                                        </div>
                                        <div className="flex items-center gap-6 text-[10px] font-black text-secondary uppercase tracking-widest mt-2 border-t border-secondary/5 pt-4">
                                            <span className="flex items-center gap-2"><Calendar size={14} /> {edu.period}</span>
                                            <span className="flex items-center gap-2"><MapPin size={14} /> {edu.location}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-black mb-16 flex items-center gap-4 text-text uppercase tracking-tighter"
                        >
                            Certificates
                            <span className="h-px bg-secondary/20 flex-grow"></span>
                        </motion.h2>

                        <div className="grid grid-cols-1 gap-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group p-6 rounded-2xl bg-secondary/5 border border-secondary/5 flex items-center gap-5 hover:bg-accent/5 hover:border-accent/30 transition-all duration-500"
                                >
                                    <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-all duration-500">
                                        <Award size={20} />
                                    </div>
                                    <p className="text-secondary text-xs font-black uppercase tracking-widest leading-relaxed">
                                        {cert}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Education;
