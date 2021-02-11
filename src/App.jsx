/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Works from './pages/Works';
import ModeContext from './Context/Mode';
import './Sass/App.scss';
import Footer from './Components/Footer/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);
  const toogleDark = (e, dark) => {
    e.preventDefault();
    const darkToogle = !dark;
    localStorage.setItem('dark', JSON.stringify({ darkMode: darkToogle }));
    setIsDark(darkToogle);
  };

  React.useEffect(() => {
    const localStorageDark = JSON.parse(localStorage.getItem('dark'));
    const userMedia = matchMedia('(prefers-color-scheme: dark)');

    if (!localStorageDark && userMedia) {
      setIsDark(userMedia.matches);
    } else {
      setIsDark(localStorageDark.darkMode);
    }
  }, []);

  return (
    <ModeContext.Provider value={{ isDark, toogleDark }}>
      <Router>
        <div className={isDark ? 'dark-body' : null}>
          <Nav />
          <main>
            <Switch>
              <Route path="/agency_website" exact>
                <Home />
              </Route>
              <Route path="/works">
                <Works />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </ModeContext.Provider>
  );
}

export default App;
