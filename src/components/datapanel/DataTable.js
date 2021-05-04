import { useContext, useEffect } from 'react';

import AppContext from '../../store/AppContext';
import * as api from '../../api/functions';
import styles from './DataTable.module.scss';

function DataTable({ datatype }) {
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    api
      .fetchData(datatype)
      .then((data) => dispatch({ type: 'data/fetch', datatype, data }));
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
