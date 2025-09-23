import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard({ id, title, image, description, price }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <br />
        <button className={styles.price} onClick={handleClick}>
          ${price}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
