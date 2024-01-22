import React from 'react';
import { Link } from 'react-router-dom';
import './Artist.scss';

const Artist = () => {
  // 가상의 미술가 목록
  const artists = [
    { name: 'Artist 1', imageUrl: '/main22.jpg', id: 1 },
    { name: 'Artist 2', imageUrl: '/main22.jpg', id: 2 },
    { name: 'Artist 3', imageUrl: '/main22.jpg', id: 3 },
    { name: 'Artist 4', imageUrl: '/main22.jpg', id: 4 },
    { name: 'Artist 5', imageUrl: '/main22.jpg', id: 5 },
    { name: 'Artist 6', imageUrl: '/main22.jpg', id: 6 },
    { name: 'Artist 7', imageUrl: '/main22.jpg', id: 7 },
    { name: 'Artist 8', imageUrl: '/main22.jpg', id: 8 },
    { name: 'Artist 9', imageUrl: '/main22.jpg', id: 9 },
    { name: 'Artist 10', imageUrl: '/main22.jpg', id: 10 },
    // 추가적인 미술가들...
  ];

  // 한 줄에 보여질 미술가 수
  const artistsPerRow = 5;

  // 미술가 목록을 한 줄에 5명씩 나누는 로직
  const rows = [];
  for (let i = 0; i < artists.length; i += artistsPerRow) {
    const row = artists.slice(i, i + artistsPerRow);
    rows.push(row);
  }

  return (
    <div className='artist-content'>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className='artist-row'>
          {row.map((artist) => (
            <Link key={artist.id} to={`/artist/${artist.id}`} className='artist-item'>
              <img src={artist.imageUrl} alt={artist.name} />
              <p>{artist.name}</p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Artist;
