import React from "react";
import "./CartProduct.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartProduct = (props) => {
  const { img, name, price, quantity, id } = props.product;
  const handleRemoveFromCart = props.handleRemoveFromCart;
  return (
    <div className="item-container">
      <img src={img} alt="Image of Product" />
      <div className="info-container">
        <div>
          <h1>{name}</h1>
          <p>
            Price: <span className="text-secondary">${price}</span>
          </p>
          <p>
            Order Quantity: <span className="text-secondary">{quantity}</span>
          </p>
        </div>
         <button className="btn-delete" onClick={() => handleRemoveFromCart(id)}>
         <FontAwesomeIcon className="delete-icon" icon={faTrash}></FontAwesomeIcon>
         </button>
      </div>
    </div>
  );
};

export default CartProduct;
