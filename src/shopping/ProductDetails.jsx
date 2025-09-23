import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import products from "./productsData";

function ProductDetails() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(null);
  const { addToCart } = useContext(CartContext);

  // پیدا کردن محصول
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  useEffect(() => {
    if (product.images && product.images.length > 0) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    addToCart({ ...product, size: selectedSize, quantity });
    alert("Added to cart!");
  };

  return (
    <div className="product-details">
      <h1 className="product-title">{product.title}</h1>

      <div className="product-main-image">
        <img src={mainImage} alt={product.title} />
      </div>

      <div className="product-thumbnails">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${product.title} ${index + 1}`}
            className={`thumbnail ${mainImage === img ? "active" : ""}`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>

      <p className="product-description">{product.description}</p>

      <div className="product-sizes">
        <h3>Select Size:</h3>
        {product.sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`size-btn ${selectedSize === size ? "active" : ""}`}
          >
            {size}
          </button>
        ))}
      </div>

      <div className="product-quantity">
        <h3>Quantity:</h3>
        <input
          type="number"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="quantity-input"
        />
      </div>

      <h2 className="product-price">Price: ${product.price}</h2>

      <button onClick={handleAddToCart} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
