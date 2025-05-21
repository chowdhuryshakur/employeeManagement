import React from 'react';

const FullScreenImageView = ({ imageUrl, onClose }) => {
  return (
    <div className="fullscreen-image">
      <div className="fullscreen-image-overlay" onClick={onClose}>

      <img src={imageUrl} alt="Full Screen Image" />
      </div>
      <button className="close-button" onClick={onClose}>Close</button>
    </div>
  );
};

export default FullScreenImageView;
