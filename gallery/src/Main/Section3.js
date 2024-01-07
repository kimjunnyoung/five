import React from 'react';
import './Main.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Section3 = () => {
  return (
    <div className="section3">
      <div className="left-content">
        <div className="artwork">
          <div className="description">
            <h3>작품</h3>
            <p>다양한 예술 작품들과 그 이면의 이야기를 만나보세요.</p>
          </div>
          <ArrowForwardIcon fontSize="large" className="arrow-icon" />
        </div>
      </div>
      <div className="center-content">
        <div className="artist">
          <div className="description">
            <h3>미술가</h3>
            <p>세계적인 미술가들의 작품과 그들의 예술적 업적에 대한 소개입니다.</p>
          </div>
          <ArrowForwardIcon fontSize="large" className="arrow-icon" />
        </div>
      </div>
      <div className="right-content">
        <div className="event">
          <div className="description">
            <h3>이벤트</h3>
            <p>다가오는 예술 행사 및 특별 이벤트에 대한 소식을 확인하세요.</p>
          </div>
          <ArrowForwardIcon fontSize="large" className="arrow-icon" />
        </div>
      </div>
      <p>예술적 감각으로 선보이는 작품, 미술가, 그리고 다양한 이벤트 소식을 만나보세요.</p>
    </div>
  );
};

export default Section3;
