import React, { useState } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

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
      <div className="logo"><NavLink to='/'><img src='/logo.png' alt="Logo" /></NavLink></div>
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
          <div className="menu-item"><NavLink to='/'>메인</NavLink></div>
          <div className="menu-item"><NavLink to='/exhibition'>전시</NavLink></div>
          <div className="menu-item"><NavLink to='/artist'>미술가</NavLink></div>
          <div className="menu-item">이벤트</div>
          <div className="menu-item">연락처</div>
          <div className="menu-item">FAQ</div>
        </div>
      )}
    </header>
  );
};

export default Header;
