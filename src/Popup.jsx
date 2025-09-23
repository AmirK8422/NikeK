import { useState, useEffect } from "react";
import "./Popup.css";
import mentorPic from "../src/assets/Mentor.jpg";

function Popup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={() => setShow(false)}>
          &times;
        </button>
        <h3>Advertisement</h3>
        <img src={mentorPic} alt="Special Offer" width="200px" />
        <p>Rafaei React Full Course!</p>
        <button className="popup-button">Subscribe Now</button>
      </div>
    </div>
  );
}

export default Popup;
