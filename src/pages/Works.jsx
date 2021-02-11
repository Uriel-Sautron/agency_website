import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons';
import Card from '../Components/Card/Card';
import StudyCase from '../Components/StudyCase/StudyCase';
import clients from '../data/clients';

const Works = () => {
  const [isCards, setIsCards] = useState(false);

  return (
    <section>
      <div className="works-left">
        <h2>Works</h2>
      </div>

      <div className="works">
        <h3>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
        <p>
          Découvrez pas à pas comment nous avons été présent pour lancer vos
          marques préférées.
        </p>
        <div className="icon-cards">
          <FontAwesomeIcon
            icon={isCards ? faList : faWindowMaximize}
            size="2x"
            onClick={() => setIsCards(!isCards)}
          />
        </div>
        {isCards ? (
          <div className="cards-container">
            {clients.map((client) => (
              <Link to={`/works/${client.slug}`} key={client.name}>
                <Card name={client.name} title={client.title} />
              </Link>
            ))}
          </div>
        ) : (
          <ul className="works-projects">
            {clients.map((client) => (
              <Link to={`/works/${client.slug}`} key={client.name}>
                <li>{client.name}</li>
              </Link>
            ))}
          </ul>
        )}
        <Switch>
          <Route path="/works/:clientSlug">
            <StudyCase />
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default Works;
