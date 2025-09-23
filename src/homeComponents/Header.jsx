import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header({ products, onSearch }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredProducts = products?.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectProduct = (id) => {
    setSearchTerm("");
    setShowDropdown(false);
    navigate(`/product/${id}`);
  };

  return (
    <div className="home-container">
      <h1>Welcome to Nightwing Shoes</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowDropdown(true);
            if (onSearch) onSearch(e.target.value);
          }}
        />

        {showDropdown && searchTerm && (
          <div className="search-dropdown">
            {filteredProducts && filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleSelectProduct(product.id)}
                >
                  <img src={product.images[0]} alt={product.title} />
                  <span>{product.title}</span>
                </div>
              ))
            ) : (
              <p>Nothing was found:( </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
