import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import StudyCase from '../Components/StudyCase/StudyCase';
import clients from '../data/clients';

const Works = () => (
  <div>
    <h2>Works</h2>
    <h3>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
    <p>
      Découvrez pas à pas comment nous avons été présent pour lancer vos marques
      préférées.
    </p>
    {clients.map((client) => (
      <Link to={`/works/${client.slug}`} key={client.slug}>
        {client.name}
      </Link>
    ))}
    <Switch>
      <Route path="/works/:clientSlug">
        <StudyCase />
      </Route>
    </Switch>
  </div>
);

export default Works;
