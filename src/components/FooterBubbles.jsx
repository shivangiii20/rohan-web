import React from 'react';
import './footerBubbles.css';

const FooterBubbles = () => {
  return (
    <div className="footer-bubble-container">
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          className="footer-bubble"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${8 + Math.random() * 20}px`,
            height: `${8 + Math.random() * 20}px`,
          }}
        />
      ))}
    </div>
  );
};

export default FooterBubbles;

