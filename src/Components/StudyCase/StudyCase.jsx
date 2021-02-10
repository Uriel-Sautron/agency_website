import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import clients from '../../data/clients';

const StudyCase = () => {
  const { clientSlug } = useParams();
  const [currentClient, setCurrentClient] = useState(undefined);

  useEffect(() => {
    const foundClient = clients.find((client) => client.slug === clientSlug);
    setCurrentClient(foundClient);
  }, [clientSlug]);

  if (!currentClient) {
    return <div>Chargement...</div>;
  }

  const { name, title, studyCase } = currentClient;
  return (
    <div>
      <h2>{name}</h2>
      <h2>{title}</h2>
      <p>{studyCase}</p>
    </div>
  );
};

export default StudyCase;
