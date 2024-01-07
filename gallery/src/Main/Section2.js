import React, { useState, useEffect } from 'react';
import './Main.scss';

const images = [
  'main1.jpg',
  'main2.jpg',
  'main3.jpg',
  'main4.jpg',
  'main5.jpg',
  'main6.jpg'
];

const Section2 = () => {
  const [visibleImages, setVisibleImages] = useState([]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    setVisibleImages((prevVisibleImages) => {
      const nextIndex = Math.floor(scrollPosition / (window.innerHeight / images.length));
      return nextIndex < images.length ? Array.from({ length: nextIndex + 1 }, (_, i) => i) : prevVisibleImages;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="image-container">
      <p>예술적 감각으로 선보이는 현대 미술의 아름다움</p>
      {images.map((image, index) => (
        <img
          key={index}
          src={`${process.env.PUBLIC_URL}/${image}`}
          alt={`Image ${index + 1}`}
          className={visibleImages.includes(index) ? 'visible' : 'hidden'}
          style={{
            transform: `translate(-10%, 10%) rotate(${index * (360 / images.length)}deg) translate(80px) rotate(-${index * (360 / images.length)}deg)`,
            transition: 'opacity 1s ease-in-out, transform 1s ease-in-out'
          }}
        />
      ))}
    </div>
  );
};

export default Section2;
