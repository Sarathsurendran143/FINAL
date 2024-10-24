import React from 'react';
import Tshirt from '../media/Tshirt.mp4';
import './Content.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cambia from '../media/cambia.jpg'; 
import lhw from '../media/lhw.jpg'
import mulimenergy from '../media/mulimenergy.jpg'
import SCN from '../media/SCN.jpg'
import yeh from '../media/yeh.jpg'
import t from '../media/t.jpg'
import sale from '../media/sale.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer';

const Content = () => {
  const projects = [
    {
     
      imgSrc: cambia ,
      rate :"hello"
    },
    {
      
      imgSrc: lhw // Use the imported image
    },
    {
     
      imgSrc: mulimenergy // Use the imported image
    },
    {
     
      imgSrc: SCN // Use the imported image
    },
    {
     
      imgSrc: yeh // Use the imported image
    },
    {
      
      imgSrc: t // Use the imported image
    },
  ];
  const Test = [
    {
      hed: "Aawesome one stop place for shopping",
      para: " Aawesome one stop place for shopping, good and wide range of collections for all age groups, rightly said as family store as it satisfies the necessity of entire family.",
      per: "Natasha C",
      rate: "hello"
    },
    {
      hed:"website and ordering process was very smooth",
      para: "The website and ordering process was very smooth. Customer service via the chat was expedient and helped me answer questions to make the right choices for placing an order.",
      per: "Johnson K"
    },
    {
      hed: "On time and fit Perfectly",
      para: "Everything arrived on time and fit perfectly. Was quite pleased with the prompt service.Thank you!",
      per :"John"
    },
    {
      hed: "excellent service",
      para: " I received my order today and everything is excellent like quality, stitching , pricing and delivery time exactly same what website showed to me",
      per :"Ali Johnson"
    },
    {
      hed: "very convenient Website navigation and browsing",
      para: "Website navigation and browsing is very convenient. The price ranges are good, lots of variety and options available and quality of products matches the description.",
      per :"Ravi",
      

    }, 
  ]

  return (
    <div className='con'>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          
          <div className="carousel-item active">
            
            <video className='video' autoPlay loop muted>
           
              <source src={Tshirt} type='video/mp4' /> 
            
            </video>
            
          </div>   
        </div>
      </div>

      <div className='sec2'>
        <div className='words'>
         
          <h1 className='hed'>TRENDING PRODUCTS</h1>
          <p className='homp'>Fashion that you wish, Find everything for your every need</p>
        </div>

        <div className='cardind'>
          {projects.map((project, index) => (
            <div className='conti' key={index}>
              <div className='pro-card'>
                <img src={project.imgSrc} alt={project.title} className='project-image' />
                {/* <p className='prodpr'>{project.rate}</p> */}
              </div>
              
            </div>
            
          ))}
       
        </div>
        <div className='vie'>
        {/* <button className='buts'>VIEW PRODUCTS &#62;</button> */}
       
<a className="codepen-button"><span className='sp'>BUY NOW</span></a>
        </div>
      </div>
      <div className='sec3'>
        <div className='bigsec'>
        <img className='secimg' src={sale} alt="" />
        <div className='mt-5'>
       <h1 className='secw'>Sale Up To 50% off</h1>
       <div className='icon'><FontAwesomeIcon className='inic' icon={faMedal} beatFade />  QALITY</div>
       <div className='icon'><FontAwesomeIcon className='inic' icon={faTruck} beatFade/>  FAST DELIVERY</div>
       <div className='icon'><FontAwesomeIcon className='inic' icon={faCreditCard} beatFade/>  EASY PAYMENT</div>
       <div className='icon'><FontAwesomeIcon className='inic' icon={faHandHoldingDollar} beatFade/>  OFFER PRICE</div>
       </div>
       </div>
      </div>
      <div className='sec4'>
        <div className='testhed'><h1 >TESTIMONALS</h1></div>
      <div className='card-cont'>
          {Test.map((Test, index) => (
            <div className='Testcont' key={index}>
              <div className='card-info'>
                <h2>{Test.hed}</h2>
                <p className='para'>"{Test.para}"</p>
                <p className='per'>"{Test.per}"</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
     {/* <Footer/> */}
    </div>
  );
};

export default Content;

