import React from "react"
import { IconCloud } from "./ui/IconCloud"

const slugs = [
    "javascript",
    "tailwindcss",
    "react",
    "framer",
    "redux",
    "nodedotjs",
    "express",
    "mongodb",
    "postgresql",
    "firebase",
    "git",
    "github",
    "postman",
    "vite",
]

export function TechStack() {
    return (
        <div id="technologies" className="flex flex-col items-center justify-center w-full py-20 bg-transparent">
            <div className="max-w-4xl w-full px-6 text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase mb-4">
                    Core <span className="text-purple-500">Technologies</span>
                </h2>
                <p className="text-[#888888] text-lg md:text-xl font-medium tracking-wide">
                    An interactive cloud of tools and languages I use to bring ideas to life.
                </p>
            </div>

            <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-6 md:px-20 pb-20 pt-8">
                <IconCloud iconSlugs={slugs} />
            </div>
        </div>
    )
}
