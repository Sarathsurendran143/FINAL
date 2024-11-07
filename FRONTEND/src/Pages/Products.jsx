import React, { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
import '../Style/Products.css'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const response = await fetch('https://final-jc8p.onrender.com/products');
    const data = await response.json();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Navbar/>
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
    <Footer/>
    </>
    
  );
};

export default Products;
