import { useContext, useEffect } from 'react';

import AppContext from '../../store/AppContext';
import * as api from '../../api/functions';
import styles from './DataTable.module.scss';

/*
 * This component is agnostic to the datatype provided. It loops
 * through the fields detected in the data model and renders a table
 * with all of them and some controls.
 */
function DataTable({ datatype }) {
  /*
   * State and fetching starting data
   */
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    api
      .fetchData(datatype)
      .then((data) => dispatch({ type: 'data/fetch', datatype, data }));
  }, [datatype, dispatch]);

  /*
   * Handlers
   */
  const handleEdit = (item) => {
    dispatch({ type: 'modal/open', item });
  };

  const handleDelete = (id) => {
    api
      .deleteData(datatype, id)
      .then(() => dispatch({ type: 'data/delete', datatype, id }));
  };

  /*
   * Render
   */
  if (state[datatype].length === 0) {
    return <p>{`There are no ${datatype} in the system.`}</p>;
  }

  const datatypeKeys = Object.keys(state[datatype][0]);

  return (
    <div className={styles.datatable}>
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
    </div>
  );
}

export default DataTable;
