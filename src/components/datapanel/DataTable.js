import { useContext, useEffect } from 'react';

import AppContext from '../../store/AppContext';
import styles from './DataTable.module.scss';

function DataTable({ datatype }) {
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    fetch(`http://localhost:3004/${datatype}`)
      .then((data) => data.json())
      .then((json) => dispatch({ type: 'data/fetch', datatype, data: json }));
  }, [datatype, dispatch]);

  if (state[datatype].length === 0) {
    return <p>{`There are no ${datatype} in the system.`}</p>;
  }

  const datatypeKeys = Object.keys(state[datatype][0]);

  return (
    <table className={styles.datatable}>
      <thead>
        <tr>
          {datatypeKeys.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {state[datatype].map((item) => (
          <tr key={item.id}>
            {datatypeKeys.map((key) => (
              <td key={key}>{item[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
