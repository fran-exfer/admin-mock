import { createContext, useReducer } from 'react';

import appReducer from './appReducer';

const AppContext = createContext(null);

export function AppContextProvider(props) {
  /*
   * We hydrate all our app with a state and a reducer function.
   */
  const reducer = useReducer(appReducer, {
    isAuth: false,
    clients: [],
    products: [],
    isModalOpen: false,
    modalCurrentItem: null,
  });

  return (
    <AppContext.Provider value={reducer}>{props.children}</AppContext.Provider>
  );
}

export default AppContext;
