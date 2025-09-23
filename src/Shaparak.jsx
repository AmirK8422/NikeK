function Shaparak() {
  return (
    <div className="kol-login">
      <div className="container-Shaparak">
        <h1>Welcome</h1>
        <p className="welcome-login"> Please enter your data below.</p>
        <form action="">
          <div className="email-matn">
            <label for="shomare-kart">PayPAl?</label>
          </div>
          <input
            type="number"
            name="shomare-kart"
            maxLength={"16"}
            placeholder="6219-86**-****-**91"
            required
          />

          <br />
          <br />

          <div className="password-login">
            <div className="password-matn">
              <label for="Cvv2">Cvv2</label>
            </div>
            <input
              type="password"
              name="Cvv2"
              maxLength={"4"}
              minLength={"3"}
              placeholder="enter your Cvv2"
              required
            />
          </div>

          <br />
          <br />

          <div className="email-matn">
            <label for="expDate">exp date:</label>
          </div>
          <input type="date" name="expDate" placeholder="63.11.22" required />

          <br />
          <br />

          <div className="password-login">
            <div className="password-matn">
              <label for="password">PayPal Passsword</label>
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
            <input type="checkbox" id="" /> Save my Bank account in google
            storage
          </p>
        </div>
        <button type="submit" className="login">
          Confirm Purchase
        </button>
      </div>
    </div>
  );
}
export default Shaparak;
