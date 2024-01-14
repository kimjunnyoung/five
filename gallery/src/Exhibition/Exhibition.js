import React from 'react';
import { Link } from 'react-router-dom';
import './Exhibition.scss';

const exhibitionsData = [
  {
    id: 1,
    title: '미술작품 1',
    artist: '홍길동',
    date: '2024-01-14',
    description: '이 작품은...',
    image: '/main.jpg',
  },
  {
    id: 2,
    title: '미술작품 2',
    artist: '김철수',
    date: '2024-01-15',
    description: '저 작품은...',
    image: '/main.jpg',
  },
  {
    id: 3,
    title: '미술작품 2',
    artist: '김철수',
    date: '2024-01-15',
    description: '저 작품은...',
    image: '/main.jpg',
  },
  {
    id: 4,
    title: '미술작품 2',
    artist: '김철수',
    date: '2024-01-15',
    description: '저 작품은...',
    image: '/main.jpg',
  },
  {
    id: 5,
    title: '미술작품 2',
    artist: '김철수',
    date: '2024-01-15',
    description: '저 작품은...',
    image: '/main.jpg',
  },
];

const Exhibition = () => {
  return (
    <div className="exhibition-wrapper">
      {exhibitionsData.map((exhibition) => (
        <Link key={exhibition.id} to={`/exhibition/${exhibition.id}`}>
          <div className="exhibition-container">
            <img className="exhibition-image" src={exhibition.image} alt={exhibition.title} />
            <div className="exhibition-details">
              <h2 className="exhibition-title">{exhibition.title}</h2>
              <p className="exhibition-artist">{exhibition.artist}</p>
              <p className="exhibition-date">{exhibition.date}</p>
              <p className="exhibition-description">{exhibition.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Exhibition;
