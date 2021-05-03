import { useContext } from 'react';

import AppContext from './store/AppContext';
import AuthPanel from './components/authentication/AuthPanel';

function App() {
  const [state] = useContext(AppContext);

  if (!state.isAuthed) {
    return (
      <main>
        <AuthPanel />
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
