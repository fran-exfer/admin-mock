import React from 'react';

interface Props {
  datatype: string;
  toggleDatatype: () => void;
}

function DataSelector({ datatype, toggleDatatype }: Props): JSX.Element {
  return (
    <div className="mb-2">
      {datatype === 'clients' ? (
        <>
          <button className="btn btn--disabled mr-1">See clients data</button>
          <button className="btn btn--secondary mr-1" onClick={toggleDatatype}>
            See products data
          </button>
        </>
      ) : (
        <>
          <button className="btn btn--secondary mr-1" onClick={toggleDatatype}>
            See clients data
          </button>
          <button className="btn btn--disabled mr-1">See products data</button>
        </>
      )}
    </div>
  );
}

export default DataSelector;
