import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Anakin Skywalker Lightsaber", description: "A powerful saber from the dark side.", price: 200, image: "/images/Anakin.jpg" },
    { id: 2, name: "Obi-Wan Kenobi Lightsaber", description: "A masterful saber of a legendary Jedi.", price: 250, image: "/images/Obi-Wan.jpg" },
    { id: 3, name: "Mace Windu Lightsaber", description: "A unique saber with a purple blade.", price: 220, image: "/images/Mace.jpg" },
    { id: 4, name: "Ahsoka Tano Lightsaber", description: "A pair of twin sabers used by Ahsoka.", price: 230, image: "/images/Asoka.jpg.png" },
    { id: 5, name: "Kit Fisto Lightsaber", description: "The saber of the Nautolan Jedi Master.", price: 240, image: "/images/Kit-Fisto.jpg.png" },
    { id: 6, name: "Luke Skywalker Lightsaber", description: "The saber of the chosen one.", price: 260, image: "/images/Luke.jpg.png" },
    { id: 7, name: "Plo Koon Lightsaber", description: "A saber used by Jedi Master Plo Koon.", price: 210, image: "/images/Plo-Kun.jpg.png" },
    { id: 8, name: "Qui-Gon Jinn Lightsaber", description: "A saber of the wise Jedi Master.", price: 250, image: "/images/Qui-Gon.jpg" },
    { id: 9, name: "Yoda Lightsaber", description: "The lightsaber of Master Yoda.", price: 300, image: "/images/Yoda.jpg" },
  ];

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(item => item.id === product.id);

    if (productIndex !== -1) {
      updatedCart[productIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="page-container">
      <header className="header">
        <h1>Lightsaber Shop</h1>
        <button className="cart-button" onClick={goToCart}>Go to Cart</button>
      </header>
      <main className="product-gallery">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">${product.price}</p>
              <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </main>
      <footer className="footer">
        <p>&copy; 2024 Lightsaber Shop</p>
      </footer>
    </div>
  );
};

export default Home;
