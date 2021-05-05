import { useContext, useRef, useEffect } from 'react';

import AppContext from '../../store/AppContext';
import submitDatatype from '../../utils/submitDatatype';

function ProductsModal() {
  const [state, dispatch] = useContext(AppContext);

  const nameRef = useRef();
  const referenceRef = useRef();
  const typeRef = useRef();
  const stockRef = useRef();
  const priceRef = useRef();

  useEffect(() => {
    if (state.modalCurrentItem !== null) {
      nameRef.current.value = state.modalCurrentItem.name;
      referenceRef.current.value = state.modalCurrentItem.reference;
      typeRef.current.value = state.modalCurrentItem.type;
      stockRef.current.value = state.modalCurrentItem.stock;
      priceRef.current.value = state.modalCurrentItem.price;
    }
  }, [state.modalCurrentItem]);

  const handleClose = () => {
    dispatch({ type: 'modal/close' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: nameRef.current.value,
      reference: referenceRef.current.value,
      type: typeRef.current.value,
      stock: stockRef.current.value,
      price: priceRef.current.value,
    };

    submitDatatype('products', data, state, dispatch);
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
