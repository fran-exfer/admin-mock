import { useRef } from 'react';

import styles from './AuthPanel.module.scss';

function AuthPanel({ onSubmit }) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  return (
    <section className={styles.authpanel}>
      <div className="panel">
        <h1>Please log in</h1>
        <form
          onSubmit={(event) =>
            onSubmit(
              event,
              usernameRef.current.value,
              passwordRef.current.value
            )
          }
        >
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
