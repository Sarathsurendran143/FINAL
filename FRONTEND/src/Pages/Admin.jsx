import React, { useState } from 'react';
import '../Style/Admin.css'
import Navbar from '../Components/Navbar';
import admin from '../media/admin.mp4'

const Admin = () => {
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: '',
    image: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewProduct({ ...newProduct, image: reader.result }); 
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct), 
    });

    if (response.ok) {
      alert('Product added successfully!');
      setNewProduct({ title: '', description: '', price: '', image: '' });
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="video-background">
       
        <video className='about-video' autoPlay loop muted>
          <source src={admin} type='video/mp4' /> 
         
        </video>
        
      </div>
      <h2 className='admhed'>ADD NEW T-SHIRTS</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newProduct.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <button className='addbtn' type="submit"><span class="button__text">Add Item</span>
        <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span></button>
      </form>
    </div>
  );
};

export default Admin;