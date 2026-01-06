import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextStaggerHover, TextStaggerHoverActive, TextStaggerHoverHidden } from "./ui/TextStaggerHover";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "RESUME", href: "/resume.pdf", delay: 0.8 },
        { label: "LINKDIN", href: "https://www.linkedin.com/in/vedant-hundare-47898a252/", delay: 1.0 },
        { label: "ABOUT ME", href: "#experience", delay: 1.2 },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1]
            }
        },
        open: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    };

    const linkVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.1 * i,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <header className="flex items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-8 relative z-50">
            {/* Logo & Location */}
            <div className="flex items-center gap-12 md:gap-20 relative z-50">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center"
                >
                    <img
                        src="/logo.png"
                        alt="Vedant Hundare"
                        className="h-8 md:h-10 w-auto object-contain"
                    />
                </motion.div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="hidden md:block"
                >
                    <TextStaggerHover as="div" className="text-sm md:text-base font-medium tracking-widest">
                        <TextStaggerHoverActive animation="top" className="text-[#888888]">
                            MUMBAI
                        </TextStaggerHoverActive>
                        <TextStaggerHoverHidden animation="bottom" className="text-white">
                            MUMBAI
                        </TextStaggerHoverHidden>
                    </TextStaggerHover>
                </motion.div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 sm:gap-8 md:gap-12">
                {navItems.map((item) => (
                    <motion.div
                        key={item.label}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: item.delay }}
                    >
                        <a href={item.href} className="nav-link overflow-hidden py-1">
                            <TextStaggerHover as="div" className="text-sm md:text-base font-medium tracking-wide">
                                <TextStaggerHoverActive animation="top" className="text-[#888888]">
                                    {item.label}
                                </TextStaggerHoverActive>
                                <TextStaggerHoverHidden animation="bottom" className="text-white">
                                    {item.label}
                                </TextStaggerHoverHidden>
                            </TextStaggerHover>
                        </a>
                    </motion.div>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden relative z-50 text-white p-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 bg-black flex flex-col items-center justify-center z-40 md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    custom={i}
                                    variants={linkVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <a
                                        href={item.href}
                                        className="text-3xl font-bold text-white tracking-widest hover:text-purple-500 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </motion.div>
                            ))}
                        </nav>
                        <motion.div
                            variants={linkVariants}
                            custom={3}
                            initial="hidden"
                            animate="visible"
                            className="mt-12"
                        >
                            <div className="text-sm font-medium tracking-widest text-[#888888]">
                                MUMBAI
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
