import React, { useState } from 'react';
import SkillItem1 from './skill-item1';
import SkillItem2 from './skill-item2';
//Imports item files, then prepares them for display
const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-label" onClick={toggleDropdown}>
        Skills <span className={isOpen ? 'arrow down' : 'arrow right'}>▶</span>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <SkillItem1 />
          <SkillItem2 />
        </div>
      )}
    </div>
  );
};

export default Skills;