import React, { useState } from 'react';

const PersonalInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-label" onClick={toggleDropdown}>
        Personal Information
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <h2>Collin Russell</h2>
          <p>Biography: A passionate and emotionally-aware artist who turned to programming as a source of easy cash in these hard times.</p>
          <p>I can be contacted at SuperCollin123456789@hotmoose.net, and my phone number is 221-221-2221.</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/johndoe">Collin Russell</a></p>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;