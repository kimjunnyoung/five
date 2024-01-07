import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
  const [language, setLanguage] = useState('KOR');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const LanguageBtn = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'KOR' ? 'ENG' : 'KOR'));
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="logo"><img src='/logo.png' alt="Logo" /></div>
      <div className={`language-button${isMenuOpen ? ' menu-open' : ''}`} onClick={LanguageBtn}>
        KOR / ENG
      </div>
      <div className={`menu-icon${isMenuOpen ? ' open' : ''}`} onClick={isMenuOpen ? closeMenu : openMenu}>
        {isMenuOpen ? (
          <div className="close-icon" onClick={closeMenu}>&#10005;</div>
        ) : (
          <>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </>
        )}
      </div>

      {isMenuOpen && (
        <div className="menu">
          <div className="menu-item">메인</div>
          <div className="menu-item">전시</div>
          <div className="menu-item">미술가</div>
          <div className="menu-item">이벤트</div>
          <div className="menu-item">연락처</div>
          <div className="menu-item">FAQ</div>
        </div>
      )}
    </header>
  );
};

export default Header;
