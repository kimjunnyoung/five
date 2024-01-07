import React from 'react';
import { Link } from 'react-scroll';
import './Main.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Section1 = () => {
  return (
    <div className="section">
      <div className="background-image">
        <div className="section1-text">
          Artège Hermès
        </div>
        <div className="scroll-button">
          <Link to="section2" smooth={true} duration={500}>
            <ExpandMoreIcon fontSize="large" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section1;
