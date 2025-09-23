function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>ShoeStore</h3>
          <p>
            Best sneakers, best prices. Stay stylish and comfy
            <br />
            with our sneakers that follow the best modern
            <br />
            ways of shoemaking.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>Shop</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>📧 supportK@shoeshop.com</p>
          <p>📞 555-911-8422</p>
          <p>📍 Georgia - USA</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} ShoeStore. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
