import { createContext, useReducer } from 'react';

import appReducer from './appReducer';

const AppContext = createContext(null);

export function AppContextProvider(props) {
  const reducer = useReducer(appReducer, {
    isAuth: false,
    clients: [],
    products: [],
    loading: true,
    error: null,
    isModalOpen: false,
    modalCurrentItem: null,
  });

  return (
    <AppContext.Provider value={reducer}>{props.children}</AppContext.Provider>
  );
}

export default AppContext;
