import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Daakit Technologies Pvt. Ltd.',
    role: 'Software Engineer',
    period: 'May 2025 - Present',
    location: 'Onsite',
    description: [
      'Led the integration of Unicommerce shipper APIs with Daakit aggregator panel, enabling seamless synchronization of shipping and order management processes.',
      'Integrated Base.com APIs into the Daakit Aggregator Panel, enhancing order processing and fulfillment efficiency for partner platforms.',
      'Implemented Holisol and Delhivery Direct integrations to enable Same-Day Delivery (SDD), Next-Day Delivery (NDD), and hyperlocal delivery workflows.',
      'Designed and implemented Value-Added Services (VAS) modules in the aggregator panel, enhancing client usability and operational efficiency.',
      'Developed and streamlined the NDR (Non-Delivery Report) flow, automating issue reporting and resolution between aggregator and courier partners.',
      'Architected and fully developed the Daakit Go courier platform, including system design, scalable backend architecture, and end-to-end API development.',
      'Provisioned and managed Ubuntu-based EC2 instances on AWS, handling end-to-end server setup, configuration, and application deployment.',
      'Performed infrastructure scaling on AWS, including EBS volume attachment and expansion, as well as system resource upgrades.',
      'Configured cloud networking on Google Cloud Platform (GCP), including VPC setup and secure network architecture implementation.',
      'Collaborated closely with product managers to refine logistics workflows, reducing manual intervention.'
    ]
  },
  {
    company: 'Stoild Private Limited',
    role: 'Backend Developer (NodeJs)',
    period: 'Jan 2024 - May 2025',
    location: 'Remote',
    description: [
      'Developed and maintained scalable RESTful APIs for diverse applications, including betting platforms and MLM systems using Node.js, Express.js, and MongoDB.',
      'Designed and implemented backend architectures tailored to domain-specific requirements such as high concurrency and hierarchical commission structures.',
      'Managed Linux servers hosting multiple backend codebases, deploying updates and monitoring system performance.',
      'Optimized database queries for speed and reliability, and engaged in regular client interactions to gather requirements.'
    ]
  }
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className=" py-10 bg-primary/20">
            <div className="max-w-6xl mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black mb-16 flex items-center gap-4 text-text uppercase tracking-tighter"
                >
                    Work
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
                                
                                <ul className="space-y-4">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-secondary/80 text-sm md:text-base leading-relaxed flex items-start gap-4">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/40 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Experience;
