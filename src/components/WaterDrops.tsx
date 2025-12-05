import React from 'react';

const WaterDrops: React.FC = () => {
  return (
    <div className="water-drops-container">
      {Array.from({ length: 10 }, (_, index) => (
        <div key={index} className="water-drop" />
      ))}
    </div>
  );
};

export default WaterDrops;
