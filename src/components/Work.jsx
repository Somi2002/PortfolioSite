// Work.jsx
import React, { useState, useEffect } from 'react';
import WorkItem from './WorkItem';

const Work = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = window.innerHeight / 1.5; // customize as needed
      // Calculate the index based on the scroll position
      const index = Math.floor(scrolled / threshold);
      setVisibleIndex(index);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


const data = [
    {
        company: 'Headstarter AI',
        title: 'Software Engineering Fellow',
        start: 'Jul 2024', // Start date field
        end: 'Present', // End date field    
        details: 
            'Creating a Pantry Tracker App utilizing React, NextJS, and Firebase to manage household inventories Developing a Customer Support AI with NextJS and OpenAI to provide automated responses to common queries. Launching an AI Flashcard App with a subscription model to facilitate learning and retention. Designing an AI Rate My Professor application using Pinecone and Embeddings to provide feedback and ratings'
    },
    {
        company: 'Jupiter Leo Productions LLC',
        title: 'Web Development Intern',
        start: 'Jul 2024', // Start date field
        end: 'Present', // End date field    
        details: 
            'Developing financial literacy gaming applications for both young children and the elderly with a focus on accessibility and simplicity, using HTML/CSS and JavaScriptEnhancing Vocabulary Lessons: Integrating AI-generated photos and voice files to improve visual and auditory learning experiences.Game Development: Designing and developing interactive educational games to enhance online financial safety courses. Content Integration: Incorporating blog articles into the curriculum to enrich lesson plans with diverse resources. Website Redesign: Leading the redesign of JupiterLeo.com to improve user experience, accessibility, and overall site functionality. Secure Browsing Education: Creating educational tools to teach users about secure browsing practices and online safety measures.'
    },
    {
        company: 'CUNY Tech Prep',
        title: 'Software Engineering Fellow',
        start: 'Jul 2023', // Start date field
        end: 'June 2024', // End date field    
        details: 
           'Selected for an intensive year-long tech program, focusing on real-world tech skills and professional development. Gaining hands-on experience with full-stack web development using React, Node.js, Express, and PostgreSQL. Implementing Agile, Scrum, and test-driven development to enhance project flow and code quality. Utilizing Git for version control and tools like Slack for team collaboration.'
    },
    {
        company: 'Open Avenues',
        title: 'Software Engineer Intern',
        start: 'Jun 2023', // Start date field
        end: 'Aug 2023', // End date field    
        details: 
           'Built a Graph-UI Library (with Plenful) using React and Typescript. Collaborated with a Plenful project leader and a co-intern to analyze complex data schemas, identify relations, and provide a logical view of the data.'
    },
    {
        company: 'Headstarter',
        title: 'Software Engineering Fellow',
        start: 'Apr 2023', // Start date field
        end: 'Jun 2023', // End date field    
        details: 
            'Collaborated with a team of 4 fellows to develop a React-based platform for Headstarter, with the functionality of enabling users to schedule meetings, coordinate availability, and communicate via video calls. Applied software design patterns, utilized Agile methodology, and employed Git version control to develop innovative software solutions.'
    },
    {
        company: 'Queens Library',
        title: 'Technology Intern',
        start: 'Nov 2022', // Start date field
        end: 'May 2023', // End date field    
        details: 
           'Pioneered the implementation of RPA software and UI Path Studio X at Queens Library with a dedicated team of 6,increasing efficiency by 5x and laying the groundwork for upcoming automation initiatives. Developed automation projects for the LACES database, saving staff 10-30 hours weekly and potential costs of up to $450, demonstrating the value of tech integration.'
    },
    
]

  return (
    <div id='work' className='max-w-[1040px] mx-auto p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-blue-900 mb-10'>Experience</h1>
      <ol className='space-y-4'>
        {data.map((item, index) => (
          <WorkItem 
            key={index}
            company={item.company}
            title={item.title}
            start={item.start}
            end={item.end}
            details={item.details}  
            isVisible={index <= visibleIndex}
          />
        ))}
      </ol>
    </div>
  );
};

export default Work;