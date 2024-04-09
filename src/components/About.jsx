import React from 'react';
import { FaAward, FaUsers, FaFolderOpen } from 'react-icons/fa'; // Import icons for additional visual elements

const About = () => {
    return (
        <section id="about" className="bg-white py-20">
            <div className="container mx-auto flex flex-col items-center px-4 md:flex-row">
                <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
                    <h2 className="text-5xl font-bold text-gray-800 mb-3">
                        About Me
                    </h2>
                    <p className="mb-5 leading-relaxed text-gray-600 text-lg">
                        A dedicated Computer Science student at the City University of New York Queens College, I bring a blend of technical knowledge, creativity, and analytical skills to the realm of technology. 
                        Whether it's through crafting scalable code in Python and Javascript or designing responsive user interfaces with React, I thrive on transforming ideas into reality. 
                        Through internships and collaborative projects, I've not only honed my development skills but also learned the value of teamwork and communication in creating impactful solutions.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out">
                            <FaFolderOpen className="mr-2" /> View Projects
                        </a>
                        <a href="#contact" className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 font-bold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out">
                            <FaUsers className="mr-2" /> Let's Connect
                        </a>
                    </div>
                </div>
                <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
                    <div className="max-w-lg">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="rounded-lg shadow-lg p-6 text-center">
                                <FaAward className="text-4xl text-blue-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Experience</h3>
                                <p className="text-gray-600 text-base">Internships and real-world projects have given me a solid foundation in software development and problem-solving.</p>
                            </div>
                            <div className="rounded-lg shadow-lg p-6 text-center">
                                <FaUsers className="text-4xl text-blue-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Collaboration</h3>
                                <p className="text-gray-600 text-base">I value teamwork and believe that collective effort is the key to achieving groundbreaking results.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
