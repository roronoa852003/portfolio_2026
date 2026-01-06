import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { CircularGallery } from './ui/CircularGallery';
import { ShiningText } from './ui/ShiningText';

const ProjectShowcase = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [radius, setRadius] = React.useState(typeof window !== 'undefined' && window.innerWidth < 768 ? 450 : 850);

    React.useEffect(() => {
        const handleResize = () => {
            setRadius(window.innerWidth < 768 ? 450 : 850);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const galleryData = [
        {
            common: 'Financial Dashboard',
            binomial: 'AI Powered Insights',
            link: 'https://financial-coordinator.vercel.app/',
            photo: {
                url: '/projects/financial.png',
                text: 'Financial trends and dashboard',
                by: 'Vedant Hundare'
            }
        },
        {
            common: 'Cyenrgy Landing',
            binomial: 'Modern Digital Presence',
            link: 'https://cyenrgy.vercel.app/',
            photo: {
                url: '/projects/cyenrgy.png',
                text: 'Cyenrgy company landing page',
                by: 'Vedant Hundare'
            }
        },
        {
            common: 'Code Smarter',
            binomial: 'Intelligent Development',
            link: 'https://www.codeaikjsit.in/',
            photo: {
                url: '/projects/code.png',
                text: 'Code smarter futures interface',
                by: 'Vedant Hundare'
            }
        },
        {
            common: 'MiniMart Delights',
            binomial: 'E-commerce Redefined',
            link: 'https://mini-store-rho.vercel.app/',
            photo: {
                url: '/projects/minimart.png',
                text: 'Minimart delights shopping platform',
                by: 'Vedant Hundare'
            }
        },
        {
            common: 'Paytm India',
            binomial: 'Seamless Payments',
            link: 'https://my-paytm-beta.vercel.app/',
            photo: {
                url: '/projects/paytm.png',
                text: 'Paytm India payment interface',
                by: 'Vedant Hundare'
            }
        },
        {
            common: 'Cynergy Websites',
            binomial: 'Creative Web Design',
            link: 'https://ochi-lovat.vercel.app/',
            photo: {
                url: '/projects/cynergy-websites.png',
                text: "Cynergy's creative website portfolio",
                by: 'Vedant Hundare'
            }
        },
        {
            common: '1st Lot Review',
            binomial: 'Data Management System',
            link: '#',
            photo: {
                url: '/projects/lot-review.png',
                text: 'Lot review and claims dashboard',
                by: 'Vedant Hundare'
            }
        }
    ];

    return (
        <section id="gallery" ref={containerRef} className="w-full relative h-[400vh] bg-transparent">
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-950/10 to-black/0 pointer-events-none" />

                <div className="w-full h-[600px] md:h-[900px] flex items-center justify-center relative">
                    <CircularGallery
                        items={galleryData}
                        radius={radius}
                        scrollProgress={scrollYProgress}
                    />
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;
