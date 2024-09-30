import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactComponent as MapSVG } from '../assets/svg/map.svg';
import ProjectsGrid from './ProjectsGrid';
import AboutMe from './AboutMe';
import useSectionObserver from './useSectionObserver';

const Section = ({ children, id, className }) => (
    <section id={id} className={`min-h-screen flex items-center justify-center p-8 ${className}`}>
        {children}
    </section>
);

const AnimatedHomePage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const mapScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
    const mapOpacity = useTransform(scrollYProgress, [0.2, 0.3], [1, 0]);

    // Use the custom hook
    useSectionObserver(['home', 'about', 'projects', 'contact']);

    return (
        <div ref={containerRef} className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300">
            <Section id="home">
                <div className="flex h-full w-full">
                    <motion.div
                        className="w-[70%] h-full min-h-[80vh] flex items-center justify-center relative"
                        style={{ scale: mapScale, opacity: mapOpacity }}
                    >
                        <MapSVG className="w-full h-full object-contain max-w-[80%] max-h-[80%] map-background text-light-secondary dark:text-dark-secondary stroke-light-accent dark:stroke-dark-accent transition-colors duration-300" />
                        <p className="absolute bottom-0 text-xl font-semibold">South Africa</p>
                    </motion.div>
                    <motion.div
                        className="w-[30%] h-full min-h-[80vh] flex flex-col justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl font-bold text-left drop-shadow-[0_3px_2px_rgba(20,88,197,1)]">_Nic Markram.</h1>
                        <p className="text-3xl text-left mt-2">Engineer & Data Scientist</p>
                    </motion.div>
                </div>
            </Section>

            <Section id="about">
                <AboutMe />
            </Section>

            {/* Projects Section */}
            <Section id="projects" className="w-full">
                <ProjectsGrid />
            </Section>

            {['Contact'].map((section, index) => (
                <Section key={section} id={section.toLowerCase()}>
                    <motion.div
                        className="bg-light-secondary dark:bg-dark-secondary p-8 rounded-lg shadow-lg max-w-2xl w-full"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <h2 className="text-3xl font-bold mb-4">{section}</h2>
                        <p>{`This is the ${section.toLowerCase()} section content. Replace with your actual content.`}</p>
                    </motion.div>
                </Section>
            ))}
        </div>
    );
};

export default AnimatedHomePage;