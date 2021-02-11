import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import ModeContext from '../../Context/Mode';

const Nav = () => {
  const { isDark, toogleDark } = useContext(ModeContext);

  return (
    <header className="nav">
      <div>
        <h1>Websitic</h1>
        <div className="nav-links">
          <Link to="/agency_website">Home</Link>
          <Link to="/works">Works</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <FontAwesomeIcon
        icon={isDark ? faSun : faMoon}
        size="3x"
        onClick={(e) => toogleDark(e, isDark)}
      />
    </header>
  );
};

export default Nav;
