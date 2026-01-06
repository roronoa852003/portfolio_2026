
import { Icons } from "./icons"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { Instagram, Linkedin, Github, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { TextStaggerHover, TextStaggerHoverActive, TextStaggerHoverHidden } from "./TextStaggerHover"
import { ShiningText } from "./ShiningText"

// Animation variants
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

export function StackedCircularFooter() {
    return (
        <footer id="contact-me" className="bg-background py-12">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    className="flex flex-col items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {/* Heading */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                        >
                            <h2 className="section-title">
                                <span className="text-white">GET IN</span> <br />
                                <ShiningText text="TOUCH" className="font-black" />
                            </h2>
                        </motion.div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="mb-8 hidden md:flex flex-wrap justify-center gap-6">
                        {["Home", "Works", "Technologies", "Experience", "Contact Me"].map((text, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                            >
                                <a
                                    href={text === "Home" ? "#" : `#${text.toLowerCase().replace(' ', '-')}`}
                                    className="overflow-hidden block"
                                >
                                    <TextStaggerHover as="div" className="text-base font-medium transition-colors">
                                        <TextStaggerHoverActive animation="top">
                                            {text}
                                        </TextStaggerHoverActive>
                                        <TextStaggerHoverHidden animation="bottom" className="text-primary">
                                            {text}
                                        </TextStaggerHoverHidden>
                                    </TextStaggerHover>
                                </a>
                            </motion.div>
                        ))}
                    </nav>

                    {/* Social Buttons */}
                    <div className="mb-8 flex space-x-4">
                        {[
                            { component: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vedant-hundare-47898a252/" },
                            { component: Github, label: "GitHub", href: "https://github.com/vedanthundare" },
                            { component: Mail, label: "Email", href: "mailto:vedanthundare8@gmail.com" },
                            { component: Instagram, label: "Instagram", href: "https://www.instagram.com/_vibewithvedant_/" }
                        ].map((social, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Button variant="outline" size="icon" className="rounded-full" asChild>
                                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                                        <social.component className="h-4 w-4" />
                                        <span className="sr-only">{social.label}</span>
                                    </a>
                                </Button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Subscribe Form */}
                    <motion.div className="mb-8 w-full max-w-md" variants={itemVariants}>
                        <form
                            className="flex space-x-2"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const email = e.target.email.value;
                                window.location.href = `mailto:vedanthundare8@gmail.com?subject=Contact from Portfolio&body=From: ${email}`;
                            }}
                        >
                            <div className="flex-grow">
                                <Label htmlFor="email" className="sr-only">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    className="rounded-full"
                                    required
                                />
                            </div>
                            <Button type="submit" className="rounded-full">Send</Button>
                        </form>
                    </motion.div>

                    {/* Copyright */}
                    <motion.div className="text-center" variants={itemVariants}>
                        <p className="text-sm text-muted-foreground">
                            © 2025 Vedant Hundare. All rights reserved.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    )
}
