import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Works from './pages/Works';
import ModeContext from './Context/Mode';
import './Sass/App.scss';

function App() {
  const [isDark, setIsDark] = useState(false);
  const toogleDark = (e, dark) => {
    e.preventDefault();
    const darkToogle = !dark;
    setIsDark(darkToogle);
  };

  return (
    <ModeContext.Provider value={{ isDark, toogleDark }}>
      <Router>
        <div className={isDark ? 'dark-body' : null}>
          <header>
            <Nav />
          </header>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </ModeContext.Provider>
  );
}

export default App;
