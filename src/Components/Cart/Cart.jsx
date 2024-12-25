import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemList from "../ItemList/ItemList";
import "./Cart.css"; // Importing CSS file for styling

// Clear cart functionality
import { clearCart, removeItems } from "../../utils/cartSlice"; // Importing actions for clearing and removing items from the cart

const Cart = () => {
  // Access cart items from Redux store
  const cartItems = useSelector((store) => store.cart.items); // Getting the cart items from the Redux store

  // Dispatch function for Redux actions
  const dispatch = useDispatch(); // Initializing the dispatch function to dispatch actions

  // Handler to clear the cart
  const handleClearCart = () => dispatch(clearCart()); // Dispatch the clearCart action to remove all items from the cart

  // Handler to remove individual item(s) from the cart
  const handleRemoveItem = (item) => dispatch(removeItems(item)); // Dispatch the removeItems action with the item to remove it

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => {
    const price = item.card.info.price
      ? item.card.info.price / 100 // Convert paise to rupees if price is in paise
      : item.card.info.defaultPrice
      ? item.card.info.defaultPrice / 100 // If price is missing, check for defaultPrice
      : 0; // Return 0 if no price is found

    const quantity = item.quantity || 1; // Get the item quantity, defaulting to 1 if undefined
    return total + price * quantity; // Calculate the total price by multiplying the price and quantity
  }, 0); // Initial total is 0

  // Calculate GST (18%) on the total price
  const gst = totalPrice * 0.18; // 18% GST

  // Calculate Discount (10%) on the total price
  const discount = totalPrice * 0.10; // 10% Discount

  // Calculate grand total after applying GST and Discount
  const grandTotal = totalPrice + gst - discount; // Add GST and subtract discount from the total price

  return (
    <div className="cart-container">
      <h1 className="cart-header">Your Cart</h1> {/* Heading for the cart */}

      {cartItems.length > 0 ? (
        <div className="cart-content"> {/* Main content container for items and price summary */}
          <div className="item-list-section">
            <ItemList items={cartItems} /> {/* Display items from cart using the ItemList component */}
          </div>

          <div className="price-summary-section">
            <div className="price-summary">
              <h2 className="summary-title">Price Details</h2> {/* Section title for price details */}
              <p className="price-item">
                Total Price: <span>₹{totalPrice.toFixed(2)}</span> {/* Displaying the total price */}
              </p>
              <p className="price-item">
                GST (18%): <span>₹{gst.toFixed(2)}</span> {/* Displaying the GST */}
              </p>
              <p className="price-item">
                Discount (10%): <span>-₹{discount.toFixed(2)}</span> {/* Displaying the discount */}
              </p>
              <h3 className="grand-total">
                Grand Total: <span>₹{grandTotal.toFixed(2)}</span> {/* Displaying the grand total */}
              </h3>
            </div>

            {/* Action Buttons Section */}
            <div className="cart-actions">
              <button className="action-btn clear-btn" onClick={handleClearCart}>
                Clear Cart
              </button> 
              <button className="action-btn clear-btn" onClick={handleRemoveItem}>
                Remove Item
              </button> 

              <button
                className="action-btn order-btn"
                onClick={() => alert("Order placed!")}
              >
                Order Now
              </button> {/* Button to place an order */}
            </div>
          </div>
        </div>
      ) : (
        <p className="empty-cart-message">Your cart is empty!</p> 
      )}
    </div>
  );
};

export default Cart;
