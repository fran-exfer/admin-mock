import { useContext, useRef, useEffect } from 'react';

import AppContext from '../../store/AppContext';
import * as api from '../../api/functions';
import submitDatatype from '../../utils/submitDatatype';

function ClientsModal() {
  const [state, dispatch] = useContext(AppContext);

  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();

  useEffect(() => {
    if (state.modalCurrentItem !== null) {
      nameRef.current.value = state.modalCurrentItem.name;
      emailRef.current.value = state.modalCurrentItem.email;
      addressRef.current.value = state.modalCurrentItem.address;
    }
  }, [state.modalCurrentItem]);

  const handleClose = () => {
    dispatch({ type: 'modal/close' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      address: addressRef.current.value,
    };

    submitDatatype('clients', data, state, dispatch);
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
