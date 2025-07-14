import React from 'react';
import './bubbles.css';

const BackgroundBubbles = () => {
  return (
    <div className="bubble-container">
      {Array.from({ length: 110 }).map((_, i) => (
        <div key={i} className="bubble" style={{ left: `${Math.random() * 100}%`, animationDuration: `${5 + Math.random() * 10}s`, animationDelay: `${Math.random() * 10}s` }} />
      ))}
    </div>
  );
};

export default BackgroundBubbles;
