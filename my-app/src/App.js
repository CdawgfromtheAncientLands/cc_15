//U94140233
import React from 'react';
import './App.css';
import PersonalInfo from './components/PII-elements';
import Skills from './components/skills-compiler';
import Experiences from './components/experience-compiler';
import Educations from './components/education-compiler';

function App() {
  return (
    <div className="App">
      <PersonalInfo />
      <Skills />
      <Experiences />
      <Educations />
    </div>
  );
}

export default App;