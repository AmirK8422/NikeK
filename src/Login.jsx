function Login() {
  return (
    <div className="kol-login">
      <div className="container-login">
        <h1>Welcome</h1>
        <p className="welcome-login"> Please enter your data below.</p>
        <form action="">
          <div className="email-matn">
            <label for="email">Email</label>
          </div>
          <input
            type="email"
            name="email"
            placeholder="example:email.com"
            required
          />

          <br />
          <br />

          <div className="password-login">
            <div className="password-matn">
              <label for="password">Passsword</label>
              <a href="google.com"> forgot password?</a>
            </div>
            <input
              type="password"
              name="password"
              placeholder="enter your password"
              required
            />
          </div>
        </form>
        <div className="ramz-login">
          <p>
            <input type="checkbox" id="" /> Remember me
          </p>
        </div>
        <button type="submit" className="login">
          Login
        </button>
        <br />
        <br />
        <div className="sabtnam-login">
          <p>
            Don't have an account? <a href="yahoo.com">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
