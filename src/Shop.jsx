import { useState } from "react";
import ProductCard from "../src/shopping/ProductCard";
import Header from "../src/homeComponents/Header";
import ScrollToTop from "./ScrollToTop";
import products from "./shopping/productsData";

function Shop() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products
    .filter((p) => (filter === "all" ? true : p.category === filter))
    .filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div style={{ padding: "20px" }}>
      <Header products={products} onSearch={setSearchQuery} />

      <div className="filter-container">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="unisex">Unisex</option>
        </select>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
          justifyItems: "center",
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.images[0]}
            description={product.description}
            price={product.price}
            id={product.id}
          />
        ))}
        <ScrollToTop />
      </div>
    </div>
  );
}

export default Shop;
