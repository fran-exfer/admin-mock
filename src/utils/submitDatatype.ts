import * as api from '../api/functions';
import { Client, Product } from '../interfaces/datatypes';
import { State, Action } from '../store/appReducer';

type DataType = Client | Product;

/*
 * Abstraction function for use within different modals or forms that need
 * to update a certain datatype in the database.
 */
const submitDatatype = (
  datatype: 'clients' | 'products',
  data: DataType,
  state: State,
  dispatch: React.Dispatch<Action>
): void => {
  if (state.modalCurrentItem === null) {
    // Creating an item
    api
      .createData(state[datatype], datatype, data)
      .then((newItem: DataType) => {
        dispatch({ type: 'data/create', datatype, data: newItem });
        dispatch({ type: 'modal/close' });
      });
  } else {
    // Updating an item
    api
      .updateData(datatype, state.modalCurrentItem.id, data)
      .then((updatedItem: DataType) => {
        dispatch({
          type: 'data/update',
          datatype,
          data: updatedItem,
        });
        dispatch({ type: 'modal/close' });
      });
  }
};

export default submitDatatype;
