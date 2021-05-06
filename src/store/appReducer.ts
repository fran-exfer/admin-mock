import { Client, Product } from '../interfaces/datatypes';

export interface State {
  isAuthed: boolean;
  clients: Client[];
  products: Product[];
  isModalOpen: boolean;
  modalCurrentItem: Client | Product | null;
}

export type Action =
  | { type: 'auth/login' }
  | { type: 'data/fetch'; datatype: string; data: Client[] | Product[] }
  | { type: 'data/create'; datatype: string; data: Client | Product }
  | { type: 'data/update'; datatype: string; data: Client | Product }
  | { type: 'data/delete'; datatype: string; id: number }
  | { type: 'modal/open'; item: Client | Product }
  | { type: 'modal/close' };

function appReducer(state: State, action: Action): State {
  switch (action.type) {
    /*
     * Authentication
     */
    case 'auth/login':
      return {
        ...state,
        isAuthed: true,
      };

    /*
     * Data operations
     * We use computed property names to avoid code repetition. These actions work with
     * clients, products, and potentially any other data array in our state.
     */
    case 'data/fetch':
      return {
        ...state,
        [action.datatype]: action.data,
      };

    case 'data/create':
      return {
        ...state,
        [action.datatype]: [...state[action.datatype], action.data],
      };

    case 'data/update':
      return {
        ...state,
        [action.datatype]: state[
          action.datatype
        ].map((item: Client | Product) =>
          item.id === action.data.id ? action.data : item
        ),
      };

    case 'data/delete':
      return {
        ...state,
        [action.datatype]: state[action.datatype].filter(
          (item: Client | Product) => item.id !== action.id
        ),
      };

    /*
     * Data modal control
     */
    case 'modal/open':
      return {
        ...state,
        isModalOpen: true,
        modalCurrentItem: action.item,
      };

    case 'modal/close':
      return {
        ...state,
        isModalOpen: false,
      };
  }
}

export default appReducer;
