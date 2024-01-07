import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import './Main.scss';
import Section3 from './Section3';
import Section4 from './Section4';

const Main = () => {
  return (
    <>
      <div className="section" id="section1" key="section1">
        <Section1 />
      </div>
      <div className="section" id="section2" key="section2">
        <Section2 />
      </div>
      <div className="section" id="section3" key="section3">
        <Section3 />
      </div>
      <div className="section" id="section4" key="section4">
        <Section4 />
      </div>
    </>
  );
};

export default Main;
