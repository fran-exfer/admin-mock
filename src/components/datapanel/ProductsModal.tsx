import React, { useContext, useRef, useEffect } from 'react';

import { Product } from '../../interfaces/datatypes';
import AppContext from '../../store/AppContext';
import submitDatatype from '../../utils/submitDatatype';

function ProductsModal(): JSX.Element {
  /*
   * State and references to inputs
   */
  const [state, dispatch] = useContext(AppContext);

  const nameRef = useRef<HTMLInputElement>(null);
  const referenceRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLInputElement>(null);
  const stockRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  /*
   * If we're editing, populate the inputs
   */
  useEffect(() => {
    // Narrow down TypeScript type
    if (
      state.modalCurrentItem !== null &&
      'reference' in state.modalCurrentItem &&
      nameRef.current &&
      referenceRef.current &&
      typeRef.current &&
      stockRef.current &&
      priceRef.current
    ) {
      nameRef.current.value = state.modalCurrentItem.name;
      referenceRef.current.value = state.modalCurrentItem.reference;
      typeRef.current.value = state.modalCurrentItem.type;
      stockRef.current.value = String(state.modalCurrentItem.stock);
      priceRef.current.value = String(state.modalCurrentItem.price);
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

    if (
      nameRef.current &&
      referenceRef.current &&
      typeRef.current &&
      stockRef.current &&
      priceRef.current
    ) {
      const data: Product = {
        id: 0,
        name: nameRef.current.value,
        reference: referenceRef.current.value,
        type: typeRef.current.value,
        stock: Number(stockRef.current.value),
        price: Number(priceRef.current.value),
      };

      submitDatatype('products', data, state, dispatch);
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
            <label>Reference:</label>
            <input type="text" ref={referenceRef} />
          </div>
          <div className="control">
            <label>Type:</label>
            <input type="text" ref={typeRef} />
          </div>
          <div className="control">
            <label>Stock:</label>
            <input type="number" ref={stockRef} />
          </div>
          <div className="control">
            <label>Price:</label>
            <input type="number" step="any" ref={priceRef} />
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

export default ProductsModal;
