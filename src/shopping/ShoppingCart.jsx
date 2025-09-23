import { useContext } from "react";
import { CartContext } from "../shopping/CartContext";

import { NavLink } from "react-router-dom";

function ShoppingCart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (item, newQty) => {
    if (newQty < 1) return;
    updateQuantity(item.id, item.size, newQty);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <h2 className="cart-item-title">{item.title}</h2>
              <p className="cart-item-detail">Size: {item.size}</p>
              <p className="cart-item-detail">Price: ${item.price}</p>
              <p className="cart-item-detail">
                Quantity:
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  className="cart-quantity"
                  onChange={(e) =>
                    handleQuantityChange(item, Number(e.target.value))
                  }
                />
              </p>
              <button
                className="cart-remove-btn"
                onClick={() => removeFromCart(item.id, item.size)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <NavLink to="/Shaparak" className="cart-remove-btn">
        Shop
      </NavLink>
    </div>
  );
}

export default ShoppingCart;
