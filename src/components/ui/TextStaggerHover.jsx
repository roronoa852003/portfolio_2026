"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextStaggerHover = ({
    children,
    as: Component = "div",
    className,
    ...props
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Component
            className={cn("relative overflow-hidden cursor-pointer", className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...props}
        >
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { isHovered });
                }
                return child;
            })}
        </Component>
    );
};

const Letter = ({ char, index, variants, transition }) => (
    <motion.span
        variants={variants}
        transition={{
            ...transition,
            delay: index * 0.02,
        }}
        className="inline-block whitespace-pre"
    >
        {char}
    </motion.span>
);

export const TextStaggerHoverActive = ({
    children,
    className,
    animation = "top",
    isHovered,
}) => {
    const text = typeof children === "string" ? children : "";
    const yValue = animation === "top" ? "-100%" : "100%";

    const variants = {
        initial: { y: 0 },
        hover: { y: yValue },
    };

    return (
        <motion.div
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
            className={cn("flex flex-wrap", className)}
        >
            {text.split("").map((char, i) => (
                <Letter
                    key={i}
                    char={char}
                    index={i}
                    variants={variants}
                    transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                />
            ))}
        </motion.div>
    );
};

export const TextStaggerHoverHidden = ({
    children,
    className,
    animation = "bottom",
    isHovered,
}) => {
    const text = typeof children === "string" ? children : "";
    const yInitial = animation === "bottom" ? "100%" : "-100%";

    const variants = {
        initial: { y: yInitial },
        hover: { y: 0 },
    };

    return (
        <motion.div
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
            className={cn("absolute inset-0 flex flex-wrap", className)}
        >
            {text.split("").map((char, i) => (
                <Letter
                    key={i}
                    char={char}
                    index={i}
                    variants={variants}
                    transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                />
            ))}
        </motion.div>
    );
};
