import { useContext, useState, useRef } from 'react';

import AppContext from '../../store/AppContext';
import styles from './AuthPanel.module.scss';

function AuthPanel() {
  const [, dispatch] = useContext(AppContext);
  const [authError, setAuthError] = useState(false);

  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:3004/auth')
      .then((data) => data.json())
      .then((json) => {
        if (
          usernameRef.current.value === json.username &&
          passwordRef.current.value === json.password
        ) {
          setAuthError(false);
          dispatch({ type: 'auth/login' });
        } else {
          setAuthError(true);
        }
      });
  };

  return (
    <section className={styles.authpanel}>
      <div className="panel">
        <h1 className="heading">Please log in</h1>
        {authError && <p className="error">Wrong username/password!</p>}
        <form onSubmit={handleSubmit}>
          <div className="control">
            <label>Admin username:</label>
            <input type="text" ref={usernameRef} />
          </div>
          <div className="control">
            <label>Admin password:</label>
            <input type="password" ref={passwordRef} />
          </div>
          <div className="flex justify-center">
            <button className="btn btn--primary">Log in</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AuthPanel;
