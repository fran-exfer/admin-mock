function AuthPanel() {
  return (
    <section>
      <div className="panel">
        <h1>Please log in</h1>
        <form>
          <div className="control">
            <label>Admin username:</label>
            <input type="text"></input>
          </div>
          <div className="control">
            <label>Admin password:</label>
            <input type="password"></input>
          </div>
          <div className="flex justify-center">
            <button class="btn btn--primary">Log in</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AuthPanel;
