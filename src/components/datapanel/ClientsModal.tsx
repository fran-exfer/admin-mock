import React, { useContext, useRef, useEffect } from 'react';

import AppContext from '../../store/AppContext';
import submitDatatype from '../../utils/submitDatatype';

function ClientsModal(): JSX.Element {
  /*
   * State and references to inputs
   */
  const [state, dispatch] = useContext(AppContext);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);

  /*
   * If we're editing, populate the inputs
   */
  useEffect(() => {
    // TypeScript type narrowing
    if (
      nameRef.current &&
      emailRef.current &&
      addressRef.current &&
      state.modalCurrentItem !== null &&
      'email' in state.modalCurrentItem
    ) {
      nameRef.current.value = state.modalCurrentItem.name;
      emailRef.current.value = state.modalCurrentItem.email;
      addressRef.current.value = state.modalCurrentItem.address;
    }
  }, [state.modalCurrentItem]);

  /*
   * Handlers
   */
  const handleClose = (): void => {
    dispatch({ type: 'modal/close' });
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    if (nameRef.current && emailRef.current && addressRef.current) {
      const data = {
        id: 0,
        name: nameRef.current.value,
        email: emailRef.current.value,
        address: addressRef.current.value,
      };

      submitDatatype('clients', data, state, dispatch);
    }
  };

  /*
   * Render the form
   */
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
