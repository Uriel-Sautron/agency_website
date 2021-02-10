import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ModeContext from '../../Context/Mode';
import Button from '../../tools/Button';

const Nav = () => {
  const { isDark, toogleDark } = useContext(ModeContext);

  return (
    <div>
      <h1>Websitic</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/works">Works</Link>
        <Link to="/about">About</Link>
      </div>
      <Button
        content={isDark ? 'LightMode' : 'DarkMode'}
        onClick={(e) => toogleDark(e, isDark)}
      />
    </div>
  );
};

export default Nav;
