import React from 'react';
import Navbar from '../Components/Navbar';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import '../Style/Contact.css'
import Cont from '../media/Cont.mp4'
import Footer from '../Components/Footer'

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const { submit } = useWeb3Forms({
    accessKey: '585573f1-ac98-4cfd-a3fa-c7bc4d9e4764', // Replace with your access key
  });

  const onSubmit = async (data) => {
    try {
      await submit(data);
      reset(); // Reset the form fields after successful submission
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <>
    <div>
      <Navbar />
      <h1 className='conthed'>GET IN TOUCH !!</h1>
      <div className="video-background">
       
        <video className='about-video' autoPlay loop muted>
          <source src={Cont} type='video/mp4' /> 
         
        </video>
        
      </div>
      <div className='contact-section'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="name" {...register('name', { required: true })} placeholder="Your Name" />
        <input type="email" name="email" {...register('email', { required: true })} placeholder="Your Email" />
        <textarea name="message" {...register('message', { required: true })} placeholder="Your Message"></textarea>
        <button type="submit">Submit Form</button>
      </form>
      </div>
      
    </div>
   
    </>
  );
};

export default Contact;
