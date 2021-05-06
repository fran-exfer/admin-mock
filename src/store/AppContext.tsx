import React, { createContext, useReducer } from 'react';

import appReducer, { State, Action } from './appReducer';

const initialState = {
  isAuthed: false,
  clients: [],
  products: [],
  isModalOpen: false,
  modalCurrentItem: null,
};

const AppContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => null,
]);

interface Props {
  children: React.ReactNode;
}

export function AppContextProvider(props: Props) {
  /*
   * We hydrate all our app with a state and a reducer function.
   */
  const reducer = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={reducer}>{props.children}</AppContext.Provider>
  );
}

export default AppContext;
