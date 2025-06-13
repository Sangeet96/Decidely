'use client';
import React from 'react';

const Section4 = () => {
  const items = ['Voice.', 'Power.', 'Impact.', 'Together.'];

  return (
    <div className="overflow-hidden w-full bg-black text-white h-32 mt-12">
      <div className="scrolling-text flex gap-18 whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span key={index} className="text-8xl font-semibold transition-opacity duration-300" style={{ fontFamily: 'Inter' }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Section4;