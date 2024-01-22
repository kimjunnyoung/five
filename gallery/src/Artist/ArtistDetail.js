
import React, { useEffect, useState } from 'react';
import './ArtistDetail.scss';

const ArtistDetail = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isContentVisible, setContentVisible] = useState(false);
  const [isBrightMode, setBrightMode] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    setContentVisible(position > 200);

    // 이미지의 가시성 초기화
    if (position === 0) {
      setBrightMode(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const progressPercentage = Math.min((scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100, 100);

  const handleBrightnessToggle = () => {
    setBrightMode(!isBrightMode);
  };


  return (
    <div className={`content ${scrollPosition > 200 ? 'visible' : ''}`}>
      <div className='dark-side'>
        <div className='emya'>
          <div className={`backgroundimg ${isContentVisible ? 'visible' : ''}`}></div>
          <div className={`splash ${isBrightMode ? 'bright-mode' : ''}`}></div>
        </div>
        <div className={`faded ${isContentVisible ? 'visible' : ''}`}>
          <div className='inner'>
            <div className='inner-smolltag'>
              <span>임헌성님의 작가로서의 심념</span>
            </div>
            <div className='inner-middletag'>
              <span>임헌성</span>
            </div>
            <div className='inner-subtag'>
              <span>고독한 미술가</span>
            </div>
            <div className='inner-bar'>
              <div className="inner-progress" style={{ width: `${progressPercentage}%` }}></div>
            </div>
          </div>
          <div className='inner-white'>
            <div className='inner-white-content'>
              <button onClick={handleBrightnessToggle}>밝기조정</button>
            </div>
          </div>
        </div>
        <div className={`KLQ ${isContentVisible ? 'visible' : ''}`}>
          <div className='spacer_name' />
          <div className='spacer_name' />
          <div className='spacer_name' />
          <div className='spacer_name' />
          <div className='spacer_name'>
            <h1>임헌성</h1>
            <h2>고독한 미술가</h2>
          </div>
          <p>
            <span>스크롤하기</span>
          </p>
        </div>
        <div className={`container ${isContentVisible ? 'visible' : ''}`}>
          <div className='KFQ'>
            <div className='noheader'>
              <div className={`noheadertitle ${isBrightMode ? 'bright-mode' : ''}`}>
                임헌성
              </div>
              <div className='noheadersubtitle'>
                고독한 미술가
              </div>
            </div>
            <div className={`noheaderbottom ${isBrightMode ? 'bright-mode' : ''}`}>
            그라가스는 난동꾼으로 유명하다. 적, 아군 가릴 것 없이 일단 화가 나면 무엇이든 깨부수고 보기 때문이다. 설사 그의 괴팍한 성격을 버틸 수 있다고 하더라도 그와 술자리를 함께하는 것에는 큰 위험이 따른다. 그가 담근 술을 마셨다가 어떤 일이 생길지 장담할 수 없기 때문이다. 그라가스가 술보다 좋아하는 게 있기는 할까? 일단 그가 싸움보다 술을 더 사랑한다는 것은 분명해 보인다. 얼마나 사랑하면 단순히 마시는 수준을 넘어서 자기가 손수 빚기까지 하겠는가? 주조가로서 그의 철학은 일단 무조건 더 독하고, 센 술을 빚어보겠다는 것. 이 사내는 이제껏 저 자신이 만족할 만큼 취해 본 적이 단 한 번도 없었다. 육중한 체구 덕분에 아무리 마셔도 제대로 취할 수 없었기 때문이다. 좋은 술이면 일단 마시고 보는 그에게 있어서 이건 또 이것 나름대로 고민거리가 되곤 하는 것 같다. 어느 날 밤, 술집에 있는 술통이란 술통은 죄다 비우고도 성이 차질 않던 그에게 문득 한 가지 생각이 떠올랐다. 이럴 바에야 내가 직접 만들어보면 어떨까? 취할 수 있는 술을 만들어 보자! 궁극의 술을 위한 그의 여정은 이렇게 시작되었다.<br></br>
            원료로 사용하기 위해 티 없이 맑은 빙하수를 구하러 다니던 그라가스는 프렐요드의 인적 없는 황량한 빙하지대에 이르렀다. 매서운 눈보라 속에서 길을 잃고 헤매던 그는 거대하고 깊은 빙하의 틈, 크레바스에 빠지고 만다. 새옹지마라고나 할까? 그는 바로 그곳에서 불가능할 정도로 투명한 얼음 조각 하나를 발견했다. 무슨 수를 써도 절대 녹지 않으며 표면에 티끌 하나 보이지 않는 이 신기한 얼음 조각은 그라가스의 맥주에 독특한 풍미를 더해주었으며 언제나 마시기 딱 좋게 시원한 온도를 유지해주는 보물 중의 보물이었다. 그라가스는 한시라도 빨리 자신이 새로 개발한 음료를 다른 이들에게 선보이고 싶었고 가까운 마을로 발걸음을 재촉했는데... 역사적 사건이나 운명적 만남은 꼭 이렇게 우연 속에서 이루어지나 보다. 그날 그 시각, 프렐요드의 애쉬는 두 부족의 전사들과 동맹을 맺기 위해 협상을 진행하고 있었다. 그들이 동맹 여부를 질질 끌고 있었기에 애쉬는 속이 다 타들어 가고 있던 참이었다. 그때 술기운으로 정신이 다소 혼미했던 그라가스가 그들의 앞에 나타났고, 비틀거리며 전사들의 몸에 부딪혔다. 전사들은 웬 주정꾼이냐면서 욕설을 퍼부었는데, 그걸 그라가스가 가만히 듣고 있을 리 없었다. 그는 욕설에 박치기로 회답했고 곧이어 한바탕 난투극이 벌어지고 말았다.

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
