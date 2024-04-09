import React from 'react';
import ProjectItem from './ProjectItem';
import ResumeParserImg from '../assets/ResumeParser.gif';
import CalculatorImg from '../assets/Calculator.gif';
import oneWorldImg from '../assets/oneWorld.gif';
import BMICalcImg from '../assets/BMICalc.gif';

const Projects = () => {
    // Project data with technology stacks and links
    const projectData = [
        {
            img: ResumeParserImg,
            title: 'Resume Parser',
            technologies: 'Python, Flask, PyPDF2, python-docx, Firebase Firestore, HTML/CSS, JavaScript',
            link: 'https://github.com/yourusername/resume-parser',
        },
        {
            img: CalculatorImg,
            title: 'Calculator',
            technologies: 'HTML/CSS, JavaScript',
            link: 'https://github.com/Somi2002/calculator',
        },
        {
            img: oneWorldImg,
            title: 'oneWorld',
            technologies: 'Vite, React, JavaScript, HTML/CSS',
            link: 'https://github.com/Dameme1/oneWorld?tab=readme-ov-file',
        },
        {
            img: BMICalcImg,
            title: 'BMI Calculator',
            technologies: 'Python, tkinter',
            link: 'https://github.com/yourusername/fried-ai',
        },
    ];
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
          <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
          <div className='text-center py-8'>
            <div 
              className='inline-block whitespace-nowrap overflow-hidden border-r-2 border-gray-900 animate-type'
            >
              A showcase of my projects.
            </div>
          </div>
          <div className='grid sm:grid-cols-2 gap-12'>
            {projectData.map((project, index) => (
              <ProjectItem
                key={index}
                img={project.img}
                title={project.title}
                technologies={project.technologies}
                link={project.link}
              />
            ))}
          </div>
          {/* Typewriter effect styles */}
          <style>
            {`
                  @keyframes typewriter {
                    0%, 100% { width: 0; }
                    50% { width: 250px; } /* Adjust this width to fit the text exactly */
                  }
                  @keyframes blinkCursor {
                    0%, 50% { border-color: transparent; }
                    50%, 100% { border-color: black; }
                  }
                  .animate-type {
                    display: inline-block;
                    font-size: 1em; /* Adjust as needed */
                    white-space: nowrap;
                    overflow: hidden;
                    border-right: 3px solid;
                    width: 0;
                    animation: typewriter 4s steps(30) infinite normal both,
                               blinkCursor 500ms steps(30) infinite normal both;
                  }              
            `}
          </style>
        </div>
      );
    }
export default Projects;
