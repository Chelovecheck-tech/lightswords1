import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './cartStyle.css';

const Cart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const navigate = useNavigate();

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (productId, delta) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(item => item.id === productId);

    if (productIndex !== -1) {
      updatedCart[productIndex].quantity += delta;
      if (updatedCart[productIndex].quantity <= 0) {
        updatedCart.splice(productIndex, 1);
      }
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const goToCheckout = () => {
    navigate('/checkout');
  };

  const goBackToShop = () => {
    navigate('/');
  };

  return (
    <div className="page-container">
      <header className="header">
        <h1>Shopping Cart</h1>
        <button className="cart-button" onClick={goBackToShop}>Back to Shop</button>
      </header>
      <main className="cart-items">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button className="checkout-button" onClick={goBackToShop}>Continue Shopping</button>
          </div>
        ) : (
          <div>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="price">${item.price}</p>
                  <div className="quantity-controls">
                    <button className="quantity-button" onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="quantity-button" onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
            <div className="total-amount">
              <h3>Total: ${calculateTotal().toFixed(2)}</h3>
            </div>
            <button className="checkout-button" onClick={goToCheckout}>Proceed to Checkout</button>
          </div>
        )}
      </main>
      <footer className="footer">
        <p>&copy; 2024 Lightsaber Shop</p>
      </footer>
    </div>
  );
};

export default Cart;
