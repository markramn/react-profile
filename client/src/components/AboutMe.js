import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProfileImage from '../assets/images/about/profile_picture.png';

const TimelineItem = ({ year, title, description }) => (
  <div className="mb-8">
    <div className="flex items-center mb-2">
      <div className="w-12 h-12 bg-light-accent dark:bg-dark-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
        {year}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="ml-16">{description}</p>
  </div>
);

const AboutMe = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const [timelineHeight, setTimelineHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  useEffect(() => {
    if (timelineRef.current) {
      setTimelineHeight(timelineRef.current.scrollHeight);
    }
  }, []);

  const timelineData = [
    { year: 2024, title: "CallCabinet", description: "I have progressed to a technical team lead, where we have developed our Analytics product to over 40 corporate customers globally. The product focuses on near realtime processing of customer audio & text interactions, large language model integration & efficient interaction searching mechanisms." },
    { year: 2023, title: "CallCabinet", description: "Joined CallCabinet in 2023 to start the Conversation Analytics team, responsible for design and architecture of our current product." },
    { year: 2022, title: "Dimension Data & NTT", description: "Promoted from Senior Associate to Data Scientist. I was tasked with research & development of various projects including large mammal detection for Connected Conservation & Realtime Data Processing for the Tour de France." },
    { year: 2021, title: "Dimension Data & NTT", description: "Accepted to the graduate program, completing various internal projects before eventually progressing to an associate Data Science role for the advanced analytics team." },
    { year: 2020, title: "University of Pretoria", description: "Finished Cum Laude in Systems & Industrial Engineering at the University of Pretoria. My research project: Digital Transformation in Human Resource Management." },
    { year: 2019, title: "Britehouse", description: "Accepted for an Internship as an Intern Engineer at Britehouse, a division of Dimension Data." },
    { year: 2015, title: "Kind Edward VII School", description: "Finished School in Sunny South Africa, at King Edward VII Boys School. Avid sportsman and active academic." },
  ];

  const handleSeeMore = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="h-screen overflow-hidden flex relative">
      <div className="w-1/2 h-full flex items-center justify-center">
        <motion.div
          style={{ scale: imageScale }}
          className="w-full max-w-md"
        >
          <img
            src={ProfileImage}
            alt="Nic Markram"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
      <div className="w-1/2 h-full overflow-y-scroll scrollbar-hide" ref={timelineRef}>
        <div className="p-8" style={{ minHeight: `${Math.max(timelineHeight, window.innerHeight)}px` }}>
          <h2 className="text-4xl font-bold mb-8">Experience & Journey</h2>
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TimelineItem {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <motion.button
        className="absolute bottom-4 right-4 bg-light-accent dark:bg-dark-accent text-white px-4 py-2 rounded-lg shadow-md hover:bg-opacity-80 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSeeMore}
      >
        See More
      </motion.button>
    </div>
  );
};

export default AboutMe;