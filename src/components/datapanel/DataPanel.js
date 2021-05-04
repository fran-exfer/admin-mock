import { useState } from 'react';

import DataTable from './DataTable';

function DataPanel() {
  const [datatype, setDatatype] = useState('clients');

  const toggleDatatype = () => {
    setDatatype((type) => (type === 'clients' ? 'products' : 'clients'));
  };

  return (
    <section>
      <div className="mb-2">
        <button
          className={`btn mr-1 ${
            datatype === 'products' ? 'btn--secondary' : 'btn--disabled'
          }`}
          onClick={toggleDatatype}
        >
          See clients data
        </button>
        <button
          className={`btn mr-1 ${
            datatype === 'clients' ? 'btn--secondary' : 'btn--disabled'
          }`}
          onClick={toggleDatatype}
        >
          See products data
        </button>
      </div>

      <div className="panel">
        <h1>
          <span className="capitalize">{datatype}</span> data
        </h1>
        <DataTable datatype={datatype} />
      </div>
    </section>
  );
}

export default DataPanel;
