import React, { useState } from 'react';
import ExperienceItem1 from './experience-item1';
import ExperienceItem2 from './experience-item2';

const Experiences = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-label" onClick={toggleDropdown}>
        Experience <span className={isOpen ? 'arrow down' : 'arrow right'}>▶</span>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <ExperienceItem1 />
          <ExperienceItem2 />
        </div>
      )}
    </div>
  );
};

export default Experiences;