import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ChevronDown ,Download } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-start pt-10 mb-20 sm:pt-20 relative overflow-hidden px-6 ">
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse delay-1000"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-8 inline-block"
                >
                    <span className="px-4 py-2 rounded-full border border-secondary/20 bg-secondary/5 backdrop-blur-md text-accent text-[10px] md:text-sm font-bold tracking-widest uppercase">
                        Full-Stack Developer & DevOps Engineer
                    </span>
                </motion.div>

                <h1 className="text-3xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tighter text-text leading-none whitespace-nowrap">
                    HARIOM <span className="text-accent underline decoration-secondary/30 underline-offset-8">SHUKLA</span>
                </h1>


                <p className="text-lg md:text-2xl text-secondary font-medium mb-12 max-w-2xl mx-auto leading-relaxed px-4">
                    Building high-performance backend systems and seamless frontend experiences with 2+ years of expertise.
                </p>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-20">
                    <a href="mailto:hariomshukla6414@gmail.com" className="flex items-center gap-3 group text-text hover:text-accent transition-all duration-300">
                        <div className="p-3 rounded-2xl bg-secondary/5 border border-secondary/10 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                            <Mail size={20} />
                        </div>
                        <span className="font-bold text-xs md:text-sm uppercase tracking-widest">Email Me</span>
                    </a>
                    <a href="tel:+919616412393" className="flex items-center gap-3 group text-text hover:text-accent transition-all duration-300">
                        <div className="p-3 rounded-2xl bg-secondary/5 border border-secondary/10 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                            <Phone size={20} />
                        </div>
                        <span className="font-bold text-xs md:text-sm uppercase tracking-widest">+91-9616412393</span>
                    </a>
                    <a 
                        href="https://drive.google.com/file/d/1TqR0nSE2cwjcAUv0L8zo_TZNVRCnJ9RV/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-accent border-2 border-accent px-8 py-3 rounded-full uppercase tracking-tighter text-sm font-black hover:bg-accent hover:text-primary transition-all duration-300"
                    >
                        Resume <Download size={20} />
                    </a>

                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="  md:flex md:flex-col absolute bottom-[2px] left-1/2 -translate-x-1/2 items-center gap-2 text-secondary animate-bounce cursor-pointer z-10"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >

                <ChevronDown size={24} strokeWidth={5} />
            </motion.div>


        </section>

    );
};

export default Hero;
