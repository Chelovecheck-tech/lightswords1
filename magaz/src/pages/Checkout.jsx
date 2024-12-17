import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './checkOut.css';

const Checkout = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Payment Successful!\nCard Number: ${cardNumber}\nCard Holder: ${cardHolder}`);
  };

  const navigate = useNavigate();

  return (
    <div className="page-container">
      <header className="header">
        <h1>Checkout</h1>
        <button className="back-to-home" onClick={() => navigate("/")}>Return to Home</button>
      </header>
      <main className="checkout-form">
        <form onSubmit={handleSubmit}>
          <label>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
          <label>Cardholder Name</label>
          <input
            type="text"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            required
          />
          <label>Expiry Date</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
          <label>CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
          <button className="submit-payment-button" type="submit">Submit Payment</button>
        </form>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Lightsaber Shop</p>
      </footer>
    </div>
  );
};

export default Checkout;
