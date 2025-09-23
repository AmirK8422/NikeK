import { useNavigate } from "react-router-dom";
import shoeImage from "../assets/shoe.png";
import thumbsUp from "../assets/thumbsUp.png";

function RightSidebar() {
  const navigate = useNavigate();

  const bestSellers = [
    { id: 1, title: "Adidas Ultraboost" },
    { id: 2, title: "Nike Air Jordan" },
    { id: 3, title: "Puma RS-X" },
  ];

  return (
    <aside className="rightSidebar">
      <div className="specialOffer">
        <h3>🔥 Today's Deal</h3>
        <img src={shoeImage} alt="Deal" className="specialOffer-img" />
        <h4>Nike X Travis</h4>
        <p>Discount on selected sneakers!</p>
      </div>

      <div className="bestSellers">
        <h3>Top Sellers</h3>
        <ul>
          {bestSellers.map((item) => (
            <li key={item.id} onClick={() => navigate(`/product/${item.id}`)}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="newsletter">
        <h3>Subscribe</h3>
        <input type="email" placeholder="Your email" />
        <button>Subscribe</button>
        <img src={thumbsUp} alt="Deal" className="specialOffer-img" />
      </div>
    </aside>
  );
}

export default RightSidebar;
