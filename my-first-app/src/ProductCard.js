import React from "react";
import "./styles.css";

function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img alt={props.title} src={props.image} />
      </div>
      <div className="product-details">
        <h3 className="product-title">{props.title}</h3>
        <div className="product-price">Rs. {props.price}</div>
      </div>
    </div>
  );
}

export default ProductCard;
