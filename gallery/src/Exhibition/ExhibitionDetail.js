import React, { useRef, useState } from 'react';
import './Exhibition.scss';

const ExhibitionDetail = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [rotation, setRotation] = useState(0);

  const exhibitionRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();

    if (e.target.classList.contains('exhibition-detail-image')) {
      setIsDragging(true);

      const rect = exhibitionRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;

      setStartX(e.clientX - centerX - rotation);
    }
  };

  const handleMouseMove = (e) => {
    e.preventDefault();

    if (isDragging) {
      const rect = exhibitionRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const newRotation = (e.clientX - centerX - startX) * 0.5;
      setRotation(newRotation);
      exhibitionRef.current.style.transform = `rotateY(${newRotation}deg)`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="exhibition-detail-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <img
        ref={exhibitionRef}
        className="exhibition-detail-image"
        src="/main.jpg"
        alt="Exhibition"
        style={{ transform: `rotateY(${rotation}deg)` }}
      />
      <div className="exhibition-detail-details">
        <h2 className="exhibition-detail-title">미술작품</h2>
        <p className="exhibition-detail-artist">Artist: 홍길동</p>
        <p className="exhibition-detail-date">Date: 2024-01-14</p>
        <p className="exhibition-detail-description">이 작품은...</p>
      </div>
    </div>
  );
};

export default ExhibitionDetail;
