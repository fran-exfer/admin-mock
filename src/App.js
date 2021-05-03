import { useState } from 'react';

import AuthPanel from './components/authentication/AuthPanel';

function App() {
  const [authed, setAuthed] = useState(false);

  const handleAuthSubmit = (event, username, password) => {
    event.preventDefault();

    fetch('http://localhost:3004/auth')
      .then((data) => data.json())
      .then((json) => {
        if (username === json.username && password === json.password) {
          setAuthed(true);
        } else {
          console.log('NOOOPE');
        }
      });
  };

  if (!authed) {
    return (
      <main>
        <AuthPanel onSubmit={handleAuthSubmit} />
      </main>
    );
  }

  return (
    <main>
      <h1>Logged in!</h1>
    </main>
  );
}

export default App;
