import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebook, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import PortfolioPic from '../assets/PortfolioPic.jpg'; 

const Main = () => {
    return (
        <div id='main'>
            {/* Parallax Background */}
            <div
                className="bg-cover bg-fixed bg-center bg-no-repeat h-screen"
                style={{ backgroundImage: `url(${PortfolioPic})` }}
            >
                {/* Overlay */}
                <div className='bg-white/50 h-full'>
                    {/* Content */}
                    <div className='max-w-[700px] mx-auto px-4 flex h-full items-center justify-center'>
                        <div className='text-center'>
                            <h1 className='text-5xl font-bold text-gray-800'>I'm Sazid Omi</h1>
                            <h2 className='text-3xl pt-4 text-gray-800'>
                                I'm a{' '}
                                <TypeAnimation
                                    sequence={[
                                        'Developer', // Strings
                                        2000, // Delay
                                        'Coder', // Strings
                                        2000, // Delay
                                        'Tech Enthusiast', // Strings
                                        2000, // Delay
                                        'Software Engineer', // Strings
                                        2000, // Delay
                                    ]}
                                    wrapper="span"
                                    cursor
                                    repeat={Infinity}
                                    style={{ paddingLeft: '5px' }}
                                />
                            </h2>
                            <div className='flex justify-around pt-6 max-w-[400px] w-full mx-auto social-icons'>
                                <a href="https://twitter.com/SazidOmi" className='social-icon' target="_blank" rel="noreferrer">
                                   <FaTwitter size={20} />
                                </a>
                                <a href="https://www.facebook.com/people/Sazid-Omi/pfbid0PRNfL31XWJYGgUyBFdBapqMdnRTgkUkt7DpMw4u3GC2BiTWeuugXiuNZFZEVu55ql/" className='social-icon' target="_blank" rel="noreferrer">
                                   <FaFacebook size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/sazid-omi/" className='social-icon' target="_blank" rel="noreferrer">
                                   <FaLinkedinIn size={20} />
                                </a>
                                <a href="https://github.com/Somi2002" className='social-icon' target="_blank" rel="noreferrer">
                                   <FaGithub size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
