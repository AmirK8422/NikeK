import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Shop from "./Shop";
import Login from "./Login";
import ProductDetails from "./shopping/ProductDetails";
import ShoppingCart from "./shopping/ShoppingCart";
import { CartProvider } from "./shopping/CartContext";

import Shaparak from "../src/Shaparak";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/shaparak" element={<Shaparak />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
