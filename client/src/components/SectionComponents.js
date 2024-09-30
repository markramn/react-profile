import React, { useEffect, useRef } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { ReactComponent as MapSVG } from '../assets/svg/map.svg';
import ProfileImage from '../assets/images/about/profile_picture.png';
import { ArrowRight } from 'lucide-react';

const Section = ({ id, children }) => (
  <section id={id} className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300 snap-start snap-always">
    <div className="container mx-auto p-8 transition-colors duration-300 min-h-[80vh]">
      {children}
    </div>
  </section>
);

export const Landing = () => (
  <Section id="home">
    <div className="flex h-full">
      <div className="w-[70%] h-full min-h-[80vh] flex items-center justify-center relative">
        <MapSVG className="w-full h-full object-contain max-w-[80%] max-h-[80%] map-background text-light-secondary dark:text-dark-secondary stroke-light-accent dark:stroke-dark-accent transition-colors duration-300" />
        <p className="absolute bottom-0 text-xl font-semibold">South Africa</p>
      </div>
      <div className="w-[30%] h-full min-h-[80vh] flex flex-col justify-center">
        <h1 className="text-6xl font-bold text-left drop-shadow-[0_3px_2px_rgba(20,88,197,1)]">_Nic Markram.</h1>
        <p className="text-3xl text-left mt-2">Engineer & Data Scientist</p>
      </div>
    </div>
  </Section>
);

const AnimatedBlurb = ({ children, index, isVisible }) => {
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate3d(0, 0, 0)' : `translate3d(${index % 2 === 0 ? -50 : 50}px, 50px, 0)`,
    delay: isVisible ? 300 * index : 0,
    config: config.molasses,
  });

  return <animated.div style={props} >{children}</animated.div>;
};

const useSectionObserver = (sectionId) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.history.pushState(null, '', `#${sectionId}`);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [sectionId]);

  return sectionRef;
};

export const About = () => {
  const sectionRef = useSectionObserver('about');
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const blurbs = [
    { title: "Engineer & Data Scientist", content: "As a passionate engineer and data scientist, I thrive on transforming complex challenges into elegant, efficient solutions." },
    { title: "Versatile Technologist", content: "With expertise spanning full-stack development, machine learning, and data analysis, I bring a comprehensive toolkit to every project." },
    { title: "Lifelong Learner", content: "In the ever-evolving tech landscape, I'm committed to continuous growth and applying diverse perspectives to problem-solving." }
  ];

  const buttonProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    delay: isVisible ? 800 : 0,
    config: config.wobbly,
  });

  return (
    <Section id="about">
      <div ref={sectionRef}>
        <h2 className="text-3xl font-bold">About Me</h2>
        <div className="flex flex-col md:flex-row h-full relative">
          <div className="w-full md:w-1/3 h-[300px] md:h-full min-h-[90vh] relative overflow-hidden flex items-center justify-center md:mb-0">
            <img src={ProfileImage} alt="Nic Markram" className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-2/3 h-full min-h-[90vh] flex flex-col justify-center p-4 md:p-12 space-y-8 relative">
            {blurbs.map((blurb, index) => (
              <AnimatedBlurb key={index} index={index} isVisible={isVisible}>
                <h3 className="text-2xl font-semibold mb-2">{blurb.title}</h3>
                <p className="text-lg">{blurb.content}</p>
              </AnimatedBlurb>
            ))}
            <animated.button style={buttonProps} className="flex items-center space-x-2 bg-light-accent dark:bg-dark-accent text-light-bg dark:text-dark-bg px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-fit self-center md:self-start">
              <span>Learn More</span>
              <ArrowRight size={20} />
            </animated.button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export const Experience = () => (
  <Section id="experience">
    <div ref={useSectionObserver('experience')}>
      <h2 className="text-3xl font-bold">My Experience</h2>
      {/* Add your experience content here */}
    </div>
  </Section>
);

export const Projects = () => (
  <Section id="projects">
    <div ref={useSectionObserver('projects')}>
      <h2 className="text-3xl font-bold">My Projects</h2>
      {/* Add your projects content here */}
    </div>
  </Section>
);

export const Contact = () => (
  <Section id="contact">
    <div ref={useSectionObserver('contact')}>
      <h2 className="text-3xl font-bold">Contact Me</h2>
      {/* Add your contact form or information here */}
    </div>
  </Section>
);