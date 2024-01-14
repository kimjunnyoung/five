import React from "react";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

import "./Main.scss";

const Section4 = () => {
  return (
    <div className="section4">
      <p>About Artège Hermès</p>
      <div className="history">
        <NavLink to="/">
          Artège Hermès
          <AddIcon style={{ position: "absolute", top: "60%", left: "40%", color: 'red', fontSize: '3rem' }} />
        </NavLink>
        <NavLink to="/">
          연혁
          <AddIcon style={{ position: "absolute", top: "60%", left: "40%", color: 'red', fontSize: '3rem' }} />
        </NavLink>
        <NavLink to="/">
          미래의 비전
          <AddIcon style={{ position: "absolute", top: "60%", left: "40%", color: 'red', fontSize: '3rem' }} />
        </NavLink>
        <NavLink to="/" style={{ borderRight: '0.3px solid #fff'}}>
          전시 공간과 디자인
          <AddIcon style={{ position: "absolute", top: "60%", left: "40%", color: 'red', fontSize: '3rem' }} />
        </NavLink>
      </div>
      <div className="about">
        <div className="contact">
          <h3>찾아오는길</h3>
        </div>
        <div className="faq">
          <h3>FAQ</h3>
        </div>
      </div>
    </div>
  );
};

export default Section4;
