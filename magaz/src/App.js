import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'; // Предположим, у вас есть этот файл
import Cart from './pages/Cart'; // Предположим, у вас есть этот файл
import Checkout from './pages/Checkout'; // Предположим, у вас есть этот файл

export default function App() {

  return (
      <Routes> {/* Контейнер для всех маршрутов */}
        <Route path="/" element={<Home />} /> {/* Маршрут для главной страницы */}
        <Route path="/cart" element={<Cart />} /> {/* Маршрут для страницы корзины */}
        <Route path="/checkout" element={<Checkout />} /> {/* Маршрут для страницы оформления заказа */}
      </Routes>
  );
}
