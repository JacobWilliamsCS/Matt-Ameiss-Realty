import React from 'react';
import './InformationPage.css'


function InformationPage() {

  //array of descriptions
  const descriptions = [

    "Navigating through your most significant transactions becomes an effortless journey with the guidance of our esteemed advisor, Matt. His innate kindness, unwavering patience, and genuine enthusiasm are all dedicated to ensuring that his clients not only experience a stress-free process but also attain a crystal-clear comprehension of every facet within the realms of buying, selling, or even building.",
    "If you're seeking an advisor who embodies the art of listening and places your aspirations above all else, reaching out to Matt is a step towards a partnership that transcends the ordinary. Don't hesitate to connect with Matt today and embark on a real estate journey that's both exceptional and deeply personalized.",
   
    "Discover effortless transactions with Matt by your side. His genuine care, patience, and expertise are devoted to providing you with a smooth and transparent journey, whether you're buying, selling, or embarking on a construction project.",
    "Experience the art of real estate with Matt's dedicated guidance. His kindness, unmatched patience, and enthusiasm are your keys to a hassle-free process and a clear understanding of the intricacies involved in real estate transactions.",

  
    

  ];

  return (
    
    <div className="property-list px-4" >
    <div className="property-image px-4" style={{ width: '500px' }}>
      <img src="https://static.wixstatic.com/media/55f97a_b19fc9cca07c4942ae5807cd084f27a4~mv2.png/v1/crop/x_0,y_3,w_375,h_537/fill/w_180,h_258,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/matt_webp.png" alt=""  />
      <h2>Matt Ameiss</h2>
      <p>Real Estate Advisor</p>
      <a href="https://mattameissrealty@gmail.com">MattAmeissRealty@gmail.com</a>
      <p>+1 (636) 443-5135</p>
      <p>Ryse Realty Group</p>
      <a href="https://ryserealtystl.com">ryserealtystl.com</a>
      <a href="https://www.facebook.com/matt.ameiss" style={{ display: 'block', marginTop: '10px' }}>
        <img src="facebooklogo.png" alt="Facebook Logo" style={{ width: '50px', height: '50px'}}/>
        </a>
        </div>

        

        <div className="testimonial-container" style={{ display: 'flex', flexWrap: 'wrap' }}></div>
        {/* <h2>Customer Testimonials</h2> */}
        {/* Render description cards */}
        {descriptions.map((description, index) => (
          <div className="description-card" key={index}>
            <p>{description}</p>

            
          </div>
         
        ))}



      </div>
 
   
    

  );

}
export default InformationPage;
