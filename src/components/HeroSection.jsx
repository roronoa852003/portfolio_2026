import { FlipWords } from "./ui/FlipWords";
import { GradualSpacing } from "./ui/GradualSpacing";

const HeroSection = () => {
    const words = ["design", "Plan", "Formulate", "develop"];

    return (
        <main className="px-6 sm:px-10 md:px-16 lg:px-24 pt-16 md:pt-24">
            {/* Greeting */}
            <GradualSpacing
                text="Hi, I'am Vedant"
                className="text-white text-sm md:text-base font-semibold mb-2"
                initialDelay={0.1}
            />

            {/* Main Layout - Side by Side */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                {/* Left Side - Title & Image */}
                <div className="flex-shrink-0 w-full lg:w-auto">
                    {/* Main Title */}
                    <div className="hero-title flex flex-col items-center lg:items-start">
                        <GradualSpacing
                            text="AI WEB"
                            className="text-white text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter"
                            initialDelay={0.8}
                        />
                        <GradualSpacing
                            text="DEVELOPER"
                            className="text-[#6b6b6b] text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter"
                            initialDelay={1.2}
                        />
                    </div>

                    {/* Profile Image */}
                    <div
                        className="mt-8 lg:mt-4 opacity-0 animate-fade-in-up flex justify-center lg:justify-start"
                        style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}
                    >
                        <div className="profile-image-container w-[350px] h-[350px] md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                            <img
                                src="/profile.jpg"
                                alt="Vedant Hundare"
                                className="w-full h-full object-cover rounded-full lg:rounded-none  hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side - Description */}
                <div
                    className="lg:max-w-md lg:pt-24 mt-10 lg:mt-0 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}
                >
                    <div className="text-[#888888] text-lg lg:text-sm leading-relaxed font-medium">
                        I{" "}
                        <FlipWords words={words} className="text-white font-bold px-0 inline-block" />
                        {" "}smart systems
                        <br />
                        that scale, learn, and actually make sense.
                        <br />
                        Usually architecting APIs,
                        <br />
                        training AI agents, and breaking things on purpose
                    </div>

                    {/* CTA Button */}
                    <a
                        href="#gallery"
                        className="cta-button text-white font-bold text-lg md:text-xl tracking-wide mt-8 inline-flex items-center gap-2 group"
                    >
                        SEE ALL PROJECTS
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;
