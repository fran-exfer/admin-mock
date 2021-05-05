import { useContext, useState } from 'react';

import AppContext from '../../store/AppContext';

import DataSelector from './DataSelector';
import DataTable from './DataTable';
import ClientsModal from './ClientsModal';
import ProductsModal from './ProductsModal';

function DataPanel() {
  const [datatype, setDatatype] = useState('clients');
  const [state, dispatch] = useContext(AppContext);

  const toggleDatatype = () => {
    setDatatype((type) => (type === 'clients' ? 'products' : 'clients'));
  };

  return (
    <section>
      <DataSelector datatype={datatype} toggleDatatype={toggleDatatype} />
      <div className="panel">
        <div className="flex justify-between align-center mb-2">
          <h1>
            <span className="capitalize">{datatype}</span> data
          </h1>
          <button
            className="btn btn--primary"
            onClick={() => dispatch({ type: 'modal/open', item: null })}
          >
            Add {datatype.slice(0, -1)}
          </button>
        </div>
        <DataTable datatype={datatype} />
      </div>

      {state.isModalOpen && (
        <>
          {datatype === 'clients' && <ClientsModal />}
          {datatype === 'products' && <ProductsModal />}
        </>
      )}
    </section>
  );
}

export default DataPanel;
