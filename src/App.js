import { useState } from 'react';

import AuthPanel from './components/authentication/AuthPanel';

function App() {
  const [authed, setAuthed] = useState(false);

  if (!authed) {
    return (
      <main>
        <AuthPanel />
      </main>
    );
  }

  return <main></main>;
}

export default App;
