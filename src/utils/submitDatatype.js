import * as api from '../api/functions';

/*
 * Abstraction function for use within different modals or forms that need
 * to update a certain datatype in the database.
 */
export default function submitDatatype(datatype, data, state, dispatch) {
  if (state.modalCurrentItem === null) {
    // Creating an item
    api.createData(state[datatype], datatype, data).then((newItem) => {
      dispatch({ type: 'data/create', datatype, data: newItem });
      dispatch({ type: 'modal/close' });
    });
  } else {
    // Updating an item
    api
      .updateData(datatype, state.modalCurrentItem.id, data)
      .then((updatedItem) => {
        dispatch({
          type: 'data/update',
          datatype,
          data: updatedItem,
        });
        dispatch({ type: 'modal/close' });
      });
  }
}
