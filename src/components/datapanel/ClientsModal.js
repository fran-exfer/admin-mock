import { useContext, useRef } from 'react';

import AppContext from '../../store/AppContext';

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
     * Use the id of the current item or, if it's a new item,
     * use auto-incremental id numbers. Change the method
     * accordingly, then fetch!
     */
    let id;
    let method;
    if (state.modalCurrentItem) {
      id = state.modalCurrentItem.id;
      method = 'PUT';
    } else {
      id = Math.max(...state.clients.map((client) => client.id)) + 1;
      method = 'POST';
    }

    const body = {
      id,
      name: nameRef.current.value,
      email: emailRef.current.value,
      address: addressRef.current.value,
    };

    fetch('http://localhost:3004/clients', {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(() => {
      dispatch({ type: 'data/save', datatype: 'clients', method, body });
      dispatch({ type: 'modal/close' });
    });
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
