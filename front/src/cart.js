import React, { useState } from "react";
import "./cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', price: '$10', quantity: 1 },
    { id: 2, name: 'Item 2', price: '$20', quantity: 2 },
    // Add more items as needed
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button onClick={() => handleRemoveItem(item.id)} className="remove-button">Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <h3>
          Total: ${cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0).toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default Cart;
