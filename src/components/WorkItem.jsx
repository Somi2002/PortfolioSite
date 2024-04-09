import React, { useState, useRef, useEffect } from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'; // Example icons

const WorkItem = ({ title, company, start, end }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  const animationClasses = isVisible
    ? 'scale-100 opacity-100'
    : 'scale-95 opacity-0';

  return (
    <div
      className={`mb-4 p-4 transition-transform duration-700 ease-out transform ${animationClasses} shadow-lg rounded-lg hover:shadow-xl relative`}
      ref={domRef}
    >
      <div className='flex flex-col items-start justify-between md:flex-row'>
        <div className='flex items-center space-x-2'>
          <FaBriefcase className='text-blue-500' />
          <h3 className='text-xl font-semibold text-blue-900'>{title}</h3>
        </div>
        <div className='flex items-center space-x-1 text-gray-500'>
          <FaCalendarAlt />
          <p className='text-sm'>{start} - {end}</p>
        </div>
      </div>
      <p className='text-sm text-gray-500 mt-2'>{company}</p>
    </div>
  );
};

export default WorkItem;
