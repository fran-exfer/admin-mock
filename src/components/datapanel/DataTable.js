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

  const handleEdit = (item) => {
    dispatch({ type: 'modal/open', item });
  };

  const handleDelete = (id) => {};

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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {state[datatype].map((item) => (
          <tr key={item.id}>
            {datatypeKeys.map((key) => (
              <td key={key}>{item[key]}</td>
            ))}
            <td>
              <button
                onClick={() => handleEdit(item)}
                className="btn btn--sm btn--primary mr-1"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="btn btn--sm btn--danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
