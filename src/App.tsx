import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import { Download } from 'lucide-react';
const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
    });

    // Smooth scrolling for anchor links
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLAnchorElement;
            if (target.tagName === 'A' && target.hash) {
                e.preventDefault();
                const element = document.querySelector(target.hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    // Theme effect
    useEffect(() => {
        if (theme === 'light') {
            document.documentElement.classList.add('light');
        } else {
            document.documentElement.classList.remove('light');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="flex flex-col min-h-screen font-sans selection:bg-accent/30 selection:text-text">
            <nav className="glass-nav px-6 py-4 flex items-center justify-between sticky top-0 z-50">

                <div className="text-xl font-black text-text uppercase tracking-tighter">
                    H<span className="text-accent">S</span>.
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center">
                    <div className="flex gap-4">
                        <a href="#about" className="nav-link">About</a>
                        <a href="#skills" className="nav-link">Skills</a>
                        <a href="#experience" className="nav-link">Experience</a>
                        <a href="#projects" className="nav-link">Projects</a>
                        <a href="#education" className="nav-link">Education</a>
                    </div>

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-secondary/10 text-text hover:bg-accent/20 transition-all border border-secondary/10 cursor-pointer"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>


                </div>

                {/* Mobile Controls */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-secondary/10 text-text border border-secondary/10"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        className="text-text p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8 text-2xl font-bold">
                    <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-text hover:text-accent transition-colors">About</a>
                    <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-text hover:text-accent transition-colors">Skills</a>
                    <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-text hover:text-accent transition-colors">Experience</a>
                    <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-text hover:text-accent transition-colors">Projects</a>
                    <a href="#education" onClick={() => setIsMenuOpen(false)} className="text-text hover:text-accent transition-colors">Education</a>
                    <a
                        href="https://drive.google.com/file/d/1TqR0nSE2cwjcAUv0L8zo_TZNVRCnJ9RV/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-accent border-2 border-accent px-8 py-3 rounded-full uppercase tracking-tighter text-sm font-black hover:bg-accent hover:text-primary transition-all duration-300"
                    >
                        Resume <Download size={20} />
                    </a>
                </div>
            )}


            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Education />
            </main>

            <Footer />
        </div>
    );
};

export default App;
