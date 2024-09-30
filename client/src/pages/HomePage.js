import React from 'react';
import VerticalNavbar from '../components/VerticalNavbar';
import AnimatedHomePage from '../components/AnimatedHomePage.js';

const HomePage = () => (
  <div className="flex">
    <VerticalNavbar />
    <main className="flex-1 ml-16 h-screen overflow-y-auto">
      <AnimatedHomePage />
    </main>
  </div>
);

export default HomePage;