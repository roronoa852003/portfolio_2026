import { ShiningText } from "./ui/ShiningText";
import { ZoomParallax } from "./ui/ZoomParallax";
import { VelocityScroll } from "./ui/VelocityScroll";
import { InteractiveRobotSpline } from "./ui/InteractiveRobotSpline";

const WorkSection = () => {
    const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

    const images = [
        {
            src: '/projects/financial.png',
            alt: 'Financial Dashboard',
        },
        {
            src: '/projects/cyenrgy.png',
            alt: 'Cyenrgy Landing Page',
        },
        {
            src: '/projects/code.png',
            alt: 'Code Smarter Futures',
        },
        {
            src: '/projects/minimart.png',
            alt: 'MiniMart Delights',
        },
        {
            src: '/projects/paytm.png',
            alt: 'Paytm India Payments',
        },
        {
            src: '/projects/cynergy-websites.png',
            alt: 'Cynergy Websites',
        },
        {
            src: '/projects/lot-review.png',
            alt: '1st Lot Review Dashboard',
        },
    ];

    return (
        <section id="works" className="pt-52 md:pt-56">
            <div className="px-6 sm:px-10 md:px-16 lg:px-24 mb-10 relative">
                <div className="relative z-10 text-center md:text-left">
                    <h2
                        className="section-title opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
                    >
                        <span className="text-white">WORK</span>
                        <br />
                        <ShiningText text="THAT WORKS" className="font-black" />
                    </h2>
                </div>

                {/* Interactive 3D Robot moved to blank space */}
                <div className="hidden md:block absolute top-[-250px] right-[-150px] w-[600px] h-[600px] pointer-events-auto z-0 overflow-hidden">
                    <InteractiveRobotSpline
                        scene={ROBOT_SCENE_URL}
                        className="w-full h-full scale-100"
                    />
                </div>
            </div>

            <div className="mt-64 mb-24 overflow-hidden">
                <VelocityScroll
                    text="👋 Hey   wanna     see     some     projects?   "
                    default_velocity={3}
                    className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter"
                />
            </div>

            <ZoomParallax images={images} />

            <div className="h-[50vh]" />
        </section>
    );
};

export default WorkSection;
