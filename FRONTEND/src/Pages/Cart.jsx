import React, { useState, useEffect } from 'react';
import '../Style/Cart.css'
import Navbar from '../Components/Navbar';
import cart from '../media/cart.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCartItems = async () => {
    const response = await fetch('http://localhost:5000/cart');
    const data = await response.json();
    setCartItems(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleDeleteItem = async (id) => {
    const response = await fetch(`http://localhost:5000/cart/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      setCartItems(cartItems.filter(item => item._id !== id));
    }
  };

  const handleUpdateQuantity = async (id, newQuantity) => {
    const updatedItem = { quantity: newQuantity };

    const response = await fetch(`http://localhost:5000/cart/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedItem),
    });

    if (response.ok) {
      setCartItems(cartItems.map(item => 
        item._id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const handlePlaceOrder = async () => {
    const response = await fetch('http://localhost:5000/cart', {
      method: 'DELETE',
    });

    if (response.ok) {
      alert('Order placed successfully');
      setCartItems([]);
    } 
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Navbar />
    <div className="video-background">
       
        <video className='about-video' autoPlay loop muted>
          <source src={cart} type='video/mp4' /> 
         
        </video>
        
      </div>
    <div className="cart-page">
      <h2 className='carthed'>Your Cart <FontAwesomeIcon icon={faCartShopping} /></h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map(item => (
              <li key={item._id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ₹
                  {item.price}</p>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleUpdateQuantity(item._id, e.target.value)}
                  />
                  <button className='Rmvbtn' onClick={() => handleDeleteItem(item._id)}><svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></button>
                </div>
              </li>
            ))}
          </ul>

          <div className="total-price">
            <h3>Total Price: ₹
            {calculateTotalPrice()}</h3>
          </div>

          <button className="place-order" onClick={handlePlaceOrder}><svg viewBox="0 0 16 16" class="bi bi-cart-check" height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="#fff">
  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
</svg><p className='buynow'>Buy Now</p></button>
        </>
      )}
    </div>
    </>
  );
};

export default Cart;