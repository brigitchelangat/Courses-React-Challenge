import React from 'react';
import './App.css';
import Course from './components/Course';
import Navigation from './components/Navigation';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Course/>
    </div>
  );
}

export default App;
