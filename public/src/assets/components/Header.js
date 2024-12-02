import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartCount = useSelector((state) => state.cart.length);

  return (
    <header className="header">
      <h1>Plant Shop</h1>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
};

export default Header;
