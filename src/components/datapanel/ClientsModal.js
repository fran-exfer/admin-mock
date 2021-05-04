import { useContext, useRef } from 'react';

import AppContext from '../../store/AppContext';
import * as api from '../../api/functions';

function ClientsModal() {
  const [state, dispatch] = useContext(AppContext);

  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();

  const handleClose = () => {
    dispatch({ type: 'modal/close' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
     * Check if we're creating or updating an item
     */
    if (state.modalCurrentItem === null) {
      // Creating an item
      const data = {
        id: Math.max(...state.clients.map((client) => client.id)) + 1,
        name: nameRef.current.value,
        email: emailRef.current.value,
        address: addressRef.current.value,
      };

      api.createData('clients', data).then(() => {
        dispatch({ type: 'data/create', datatype: 'clients', data });
        dispatch({ type: 'modal/close' });
      });
    } else {
      // Updating an item
    }
  };

  return (
    <div className="modal">
      <div className="panel">
        <h1 className="heading">Clients modal</h1>

        <form onSubmit={handleSubmit}>
          <div className="control">
            <label>Name:</label>
            <input type="text" ref={nameRef} />
          </div>
          <div className="control">
            <label>Email:</label>
            <input type="email" ref={emailRef} />
          </div>
          <div className="control">
            <label>Address:</label>
            <input type="text" ref={addressRef} />
          </div>
          <div className="flex justify-around mt-2">
            <button
              type="button"
              className="btn btn--danger"
              onClick={handleClose}
            >
              Cancel
            </button>
            <input type="submit" value="Save" className="btn btn--primary" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ClientsModal;
