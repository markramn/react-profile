import React from 'react';
import { ReactComponent as MapSVG } from '../assets/svg/map.svg';

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
      <div className="w-[70%] h-full min-h-[80vh] flex items-center justify-center">
        <div className="landing-left relative w-full h-full flex flex-col items-center justify-center">
          <MapSVG className="w-full h-full object-contain max-w-[80%] max-h-[80%] map-background text-light-secondary dark:text-dark-secondary stroke-light-accent dark:stroke-dark-accent transition-colors duration-300" />
          <p className="absolute bottom-0 text-1xl font-semibold">South Africa</p>
        </div>
      </div>
      <div className="w-[30%] h-full min-h-[80vh] flex flex-col justify-center">
        <h1 className="text-6xl font-bold text-left drop-shadow-[0_3px_2px_rgba(20,88,197,1)]">_Nic Markram.</h1>
        <p className="text-3xl text-left mt-2">Engineer & Data Scientist</p>
      </div>
    </div>
  </Section>
);

export const About = () => (
  <Section id="about">
    <h2 className="text-3xl font-bold">About Me</h2>
  </Section>
);

export const Experience = () => (
  <Section id="experience">
    <h2 className="text-3xl font-bold">My Experience</h2>
  </Section>
);

export const Projects = () => (
  <Section id="projects">
    <h2 className="text-3xl font-bold">My Projects</h2>
  </Section>
);

export const Contact = () => (
  <Section id="contact">
    <h2 className="text-3xl font-bold">Contact Me</h2>
  </Section>
);