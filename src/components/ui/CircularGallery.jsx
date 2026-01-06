import React from 'react';
import { motion, useTransform } from 'framer-motion';

const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
}

const CircularGallery = React.forwardRef(
    ({ items, className, radius = 600, scrollProgress, ...props }, ref) => {
        // Map scrollProgress (0 to 1) to rotation (0 to 360)
        // We use scrollProgress which is passed from the sticky container
        const rotation = useTransform(scrollProgress, [0, 1], [0, 360]);

        const anglePerItem = 360 / items.length;

        return (
            <div
                ref={ref}
                role="region"
                aria-label="Circular 3D Gallery"
                className={cn("relative w-full h-full flex items-center justify-center", className)}
                style={{ perspective: '2000px' }}
                {...props}
            >
                <motion.div
                    className="relative w-full h-full"
                    style={{
                        rotateY: rotation,
                        transformStyle: 'preserve-3d',
                    }}
                >
                    {items.map((item, i) => {
                        const itemAngle = i * anglePerItem;

                        return (
                            <div
                                key={item.photo.url}
                                role="group"
                                aria-label={item.common}
                                className="absolute w-[320px] h-[200px] md:w-[450px] md:h-[300px]"
                                style={{
                                    transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                                    left: '50%',
                                    top: '50%',
                                    marginLeft: window.innerWidth < 768 ? '-160px' : '-225px',
                                    marginTop: window.innerWidth < 768 ? '-100px' : '-150px',
                                    transition: 'opacity 0.3s linear'
                                }}
                            >
                                <a
                                    href={item.link || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block relative w-full h-full rounded-xl shadow-2xl overflow-hidden group border border-white/20 bg-black/40 backdrop-blur-lg transition-transform duration-500 hover:scale-105 active:scale-95"
                                >
                                    <img
                                        src={item.photo.url}
                                        alt={item.photo.text}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        style={{ objectPosition: item.photo.pos || 'center' }}
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/95 via-black/50 to-transparent text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <h2 className="text-xl md:text-2xl font-black tracking-tighter">{item.common}</h2>
                                        <em className="text-sm md:text-base italic opacity-80 block mb-2">{item.binomial}</em>
                                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60">
                                            <span>View Project</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        );
    }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
