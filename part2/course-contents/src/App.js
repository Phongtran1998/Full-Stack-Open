import React from 'react';
import Course from './components/Course';

const App = ({ courses }) => {
  return (
    <div>
      <h1>Web developer curriculum</h1>
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default App;
