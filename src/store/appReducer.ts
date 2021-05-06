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
  | {
      type: 'data/fetch' | 'data/create' | 'data/update';
      datatype: 'clients' | 'products';
      data: Client | Product;
    }
  | { type: 'data/delete'; datatype: 'clients' | 'products'; id: number }
  | { type: 'modal/open'; item: Client | Product | null }
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
      const newArr = state[action.datatype] as [];
      return {
        ...state,
        [action.datatype]: newArr.filter(
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
