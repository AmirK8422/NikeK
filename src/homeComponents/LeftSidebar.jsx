import makeenPic from "../assets/Makeen.jpg";
import adPic from "../assets/ads.png";

function LeftSidebar() {
  return (
    <aside className="leftSidebar">
      <div className="category-filter">
        <h3>Categories</h3>
        <ul>
          <li>Male</li>
          <li>Female</li>
          <li>Sport</li>
          <li>Kids</li>
        </ul>
      </div>

      <div className="sponsor">
        <h3>Advertisement</h3>
        <img src={makeenPic} alt="Special Offer" width="200px" />
        <pre>Makeen needs you!</pre>
      </div>
      <div className="category-filter">
        <h3>Coming Soon</h3>
        <ul>
          <li>Trousers</li>
          <li>Sandals</li>
          <li>Tank Top</li>
          <li>T-Shirt</li>
        </ul>
      </div>

      <div className="sponsor">
        <h3>Advertisement</h3>
        <img src={adPic} alt="Special Offer" width="200px" />
        <p>a place to grow</p>
      </div>
    </aside>
  );
}

export default LeftSidebar;
