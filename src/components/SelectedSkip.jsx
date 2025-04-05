import React from 'react';
import '../css/selectedSkip.css';

const SelectedSkip = ({ price, size }) => {
  return (
    <div className="selected-skip-box">
      <p><strong>Selected Skip:</strong></p>
      <p>Price: {price}</p>
      <p>Size: {size} Yard</p>
    </div>
  );
};

export default SelectedSkip;
