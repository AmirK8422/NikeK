import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { motion } from "framer-motion";
import { CartContext } from "./shopping/CartContext";

function Navbar() {
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const { cartItems } = useContext(CartContext);

  const handleSetUnderline = (e) => {
    const { offsetLeft, offsetWidth } = e.target;
    setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
  };

  useEffect(() => {
    const active = navRef.current.querySelector(".active-link");
    if (active)
      setUnderlineStyle({ left: active.offsetLeft, width: active.offsetWidth });

    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav ref={navRef} className={`nav-container ${scrolled ? "scrolled" : ""}`}>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink
          to="/Login"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={handleSetUnderline}
        >
          Login | Register
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={handleSetUnderline}
        >
          Home
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={handleSetUnderline}
        >
          About
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={handleSetUnderline}
        >
          Contact
        </NavLink>
        <NavLink
          to="/Shop"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={handleSetUnderline}
        >
          Shop
        </NavLink>
        <NavLink to="/cart">🛒 ({cartItems.length})</NavLink>
      </div>

      <motion.span
        className="underline"
        animate={underlineStyle}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </nav>
  );
}

export default Navbar;
