
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, University } from 'lucide-react';
import { cn } from '../lib/utils';
import { ShiningText } from './ui/ShiningText';
import { PixelCanvas } from './ui/PixelCanvas';

const historyData = [
    {
        id: 1,
        type: 'experience',
        title: "Full Stack Developer and AI Intern",
        organization: "Blackhole Infiverse",
        period: "Mar 2025 - Sep 2025",
        location: "Mumbai",
        description: "Developed front-end components using React.js with Tailwind CSS and Redux/Context API. Built RESTful APIs with Node.js, Express.js, and MongoDB. Implemented AI features by integrating Large Language Models (LLMs) using Python.",
        skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "LLMs"]
    },
    {
        id: 2,
        type: 'experience',
        title: "Full Stack Web Developer Intern",
        organization: "All World Gayatri Parivar",
        period: "May 2024 - Jul 2024",
        location: "Remote",
        description: "Developed frontend components and coordinated with UI designer. Implemented audio storage system integration and rendered audio content using React.",
        skills: ["React", "GitHub", "UI Collaboration"]
    },
    {
        id: 3,
        type: 'education',
        title: "B.E. in Computer Engineering",
        organization: "K J Somaiya Institute of Technology",
        period: "2026 (Present)",
        location: "Mumbai",
        description: "Current CGPA: 8.4",
        skills: ["Computer Engineering"]
    },
    {
        id: 4,
        type: 'education',
        title: "XII (HSC)",
        organization: "Abhishek Vidyalayam",
        period: "2022",
        location: "Pune",
        description: "Secured 84%",
        skills: ["Science", "Mathematics"]
    },
    {
        id: 5,
        type: 'education',
        title: "X (CBSE)",
        organization: "S.N.B.P International School",
        period: "2020",
        location: "Pune",
        description: "Secured 89.6%",
        skills: ["General Studies"]
    }
];

// Animation variants matching footer
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
};

const TimelineItem = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={containerVariants}
            className={cn(
                "relative flex items-center justify-between md:justify-normal w-full mb-8",
                isEven ? "md:flex-row-reverse" : "md:flex-row"
            )}
        >
            {/* Center Line Dot */}
            <motion.div
                variants={itemVariants}
                className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-black z-10 transform -translate-x-1/2 mt-1.5 md:mt-0"
            />

            {/* Content Card */}
            <div className={cn(
                "w-full md:w-5/12 pl-12 md:pl-0",
                isEven ? "md:pr-8 text-left" : "md:pl-8 text-left"
            )}>
                <motion.div
                    className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-6 rounded-xl hover:border-purple-500/50 transition-colors duration-300 group relative overflow-hidden"
                    variants={itemVariants}
                >
                    <PixelCanvas
                        gap={6}
                        speed={20}
                        colors={["#a855f7", "#3b82f6", "#e879f9"]}
                        variant="icon"
                        noFocus
                    />

                    <div className="flex flex-col gap-2 relative z-10">
                        <motion.div className="flex items-center gap-2 text-purple-400 mb-1" variants={itemVariants}>
                            {item.type === 'experience' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                            <span className="text-xs font-semibold uppercase tracking-wider">{item.type}</span>
                        </motion.div>

                        <motion.h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors" variants={itemVariants}>
                            {item.title}
                        </motion.h3>

                        <motion.div className="text-zinc-400 font-medium text-sm flex flex-wrap gap-x-4 gap-y-1 mb-2" variants={itemVariants}>
                            <span className="flex items-center gap-1">
                                <University size={14} />
                                {item.organization}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar size={14} />
                                {item.period}
                            </span>
                            <span className="flex items-center gap-1">
                                <MapPin size={14} />
                                {item.location}
                            </span>
                        </motion.div>

                        <motion.p className="text-zinc-500 text-sm leading-relaxed mb-4" variants={itemVariants}>
                            {item.description}
                        </motion.p>

                        <motion.div className="flex flex-wrap gap-2" variants={itemVariants}>
                            {item.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
                                >
                                    {skill}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export function HistoryTimeline() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                    >
                        <h2 className="section-title">
                            <span className="text-white">MY</span> <br />
                            <ShiningText text="JOURNEY" className="font-black" />
                        </h2>
                    </motion.div>
                </div>

                <div ref={containerRef} className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent transform -translate-x-1/2 origin-top"
                    />

                    <div className="flex flex-col gap-12">
                        {historyData.map((item, index) => (
                            <TimelineItem key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
