function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>📧 Email: supportK@shoeshop.com</p>
      <p>📞 Phone Number: 555-991-8422</p>
      <p>📍 22, St. Moa, Georgia</p>

      <form className="contact-form">
        <h1>Send a ticket</h1>
        <label>Name</label>
        <input type="text" className="contact-input" />

        <label>Email:</label>
        <input type="email" className="contact-input" />

        <label>Message:</label>
        <textarea className="contact-textarea" />

        <button type="submit" className="contact-btn">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
