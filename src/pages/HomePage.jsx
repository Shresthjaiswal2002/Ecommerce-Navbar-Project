import React from "react";
import { Link } from "react-router-dom";
import "./product.css"

function HomePage() {
  return (
    <div>
      <h1 className="head">Welcome to Ecommerce Website!!</h1>
      <Link to="/products">
      <button class="btn">Click to know the details of the product</button>
      </Link>
    </div>
  );
}

export default HomePage;
