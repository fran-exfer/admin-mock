import { useState, useEffect } from 'react';

function App() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/clients')
      .then((data) => data.json())
      .then((json) => setClients(json));
  }, []);

  return (
    <>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
