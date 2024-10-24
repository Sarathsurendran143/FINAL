import React from 'react'
import Navbar from '../Components/Navbar'
import Tshirt from '../media/hoodie.mp4'
import '../Style/About.css'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <>
    <div className='about-cont'>
      <Navbar />
      
      <div className="video-background">
       
        <video className='about-video' autoPlay loop muted>
          <source src={Tshirt} type='video/mp4' /> 
         
        </video>
        
      </div>
      <div className='Abtout'>
      <h1 className='ab-par'>Introducing our T-shirt brand, where style meets comfort! Each piece is crafted from high-quality, breathable fabrics that feel great against the skin, making them perfect for everyday wear. Our designs blend contemporary aesthetics with timeless appeal, featuring unique graphics and vibrant colors that allow you to express your individuality. Whether you're dressing up for a casual outing or lounging at home, our T-shirts offer versatility and ease. With a commitment to sustainability, we prioritize eco-friendly practices in our production process. Join us in celebrating creativity and comfort with every shirt you wear!</h1>
      <button className='abt-btn'><Link className='Contbut' to={"/contact"}> CONTACT US...</Link></button>
      </div>
    </div>
   <Footer/>
   </>
  )
}

export default About
