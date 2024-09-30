import React from 'react';
import ThemeToggle from './ThemeToggle';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const VerticalNavbar = () => (
  <nav className="fixed left-0 top-0 h-full w-16 bg-light-secondary dark:bg-dark-secondary flex flex-col items-center justify-between py-4 transition-colors duration-300">
    <div className="flex flex-col items-center space-y-4">
      <ThemeToggle />
    </div>
    <div className="flex flex-col items-center space-y-8">
      <NavItem href="#home" label="↑" isUpArrow={true} />
      <NavItem href="#about" label="About" />
      <NavItem href="#projects" label="Projects" />
      <NavItem href="#contact" label="Contact" />
    </div>
    <div className="flex flex-col items-center space-y-4">
      <SocialIcon href="https://www.instagram.com/nicmarkram" icon={<FaInstagram />} label="Instagram" />
      <SocialIcon href="https://github.com/markramn" icon={<FaGithub />} label="GitHub" />
      <SocialIcon href="https://www.linkedin.com/in/nicholasmarkram/" icon={<FaLinkedin />} label="LinkedIn" />
    </div>
  </nav>
);

const NavItem = ({ href, label, isUpArrow = false }) => (
  <a
    href={href}
    className={`text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300 ${isUpArrow ? '' : 'writing-mode-vertical'}`}
    title={label}
  >
    {label}
  </a>
);

const SocialIcon = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300 text-2xl" // Increased text size
    title={label}
  >
    {React.cloneElement(icon, { className: 'w-6 h-6' })} {/* Set a specific size for the icon */}
  </a>
);

export default VerticalNavbar;