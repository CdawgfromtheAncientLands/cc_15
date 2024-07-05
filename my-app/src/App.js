//U94140233
import React from 'react';
import './App.css';
import PersonalInfo from './components/PII-elements';
import Skills from './components/skills-compiler';
//import Experiences from './components/Experiences';
//import Educations from './components/Educations';

function App() {
  return (
    <div className="App">
      <PersonalInfo />
      <Skills />
    </div>
  );
}

export default App;