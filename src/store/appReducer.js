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
     * If an action.type isn't supported, we should at least throw an error.
     */
    default:
      throw new Error(
        `Action type ${action.type} isn't accepted by appReducer`
      );
  }
}

export default appReducer;
