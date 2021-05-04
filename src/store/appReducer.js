function appReducer(state, action) {
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
        [action.datatype]: state[action.datatype].map((data) =>
          data.id === action.body.id ? action.body : data
        ),
      };

    case 'data/delete':
      return {
        ...state,
        [action.datatype]: state[action.datatype].filter(
          (item) => item.id !== action.data.id
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

    /*
     * If an action.type isn't supported, we should at least throw an error.
     */
    default:
      throw new Error(
        `Action type ${action.type} isn't accepted by appReducer`
      );
  }
}

export default appReducer;
