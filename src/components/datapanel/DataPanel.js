import { useState } from 'react';

import DataSelector from './DataSelector';
import DataTable from './DataTable';

function DataPanel() {
  const [datatype, setDatatype] = useState('clients');

  const toggleDatatype = () => {
    setDatatype((type) => (type === 'clients' ? 'products' : 'clients'));
  };

  return (
    <section>
      <DataSelector datatype={datatype} toggleDatatype={toggleDatatype} />
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
