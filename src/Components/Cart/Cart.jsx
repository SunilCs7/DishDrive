import React from "react";
import { useSelector } from "react-redux";
import ItemList from "../ItemList/ItemList";
import "./Cart.css"; // Import the CSS file

// cear cart releted
import { clearCart } from "../../utils/cartSlice";

import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  // clearCart Related
  const dispatch = useDispatch();
  const handleClearCart = () => dispatch(clearCart());

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          <ItemList items={cartItems} />
        </div>
      ) : (
        <p className="empty-cart-message">Your cart is empty!</p>
      )}

      <div className="clear-cart">
        <button onClick={handleClearCart} className="clear-btn">
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
