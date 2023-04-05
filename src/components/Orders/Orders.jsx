import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { getShoppingCart } from "../../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import CartProduct from "../CartProduct/CartProduct";
import './Orders.css'
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
      const remaining = cart.filter(product => product.id !== id);
      removeFromDb(id)
      setCart(remaining)
    }

  return (
    <div className="shop-container">
      <div className="cart-product-container">
        {
          cart.length !== 0 ? cart.map(product => <CartProduct product={product} key={product.id} handleRemoveFromCart = {handleRemoveFromCart}></CartProduct>) : <h1>No Product Added</h1>
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
