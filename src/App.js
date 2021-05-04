import { useContext } from 'react';

import AppContext from './store/AppContext';

import AuthPanel from './components/authentication/AuthPanel';
import DataPanel from './components/datapanel/DataPanel';

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
      <DataPanel />
    </main>
  );
}

export default App;
