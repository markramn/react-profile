import React from 'react';
import VerticalNavbar from '../components/VerticalNavbar';
import { Landing, About, Experience, Projects, Contact } from '../components/SectionComponents';

const HomePage = () => (
  <div className="flex bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300">
    <VerticalNavbar />
    <main className="flex-1 ml-16 h-screen overflow-y-scroll snap-y snap-mandatory">
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  </div>
);

export default HomePage;