import React from 'react';
import './InformationPage.css';

function InformationPage() {
  // Array of descriptions
  const descriptions = [
    "Navigating through your most significant transactions becomes an effortless journey with the guidance of our esteemed advisor, Matt. His innate kindness, unwavering patience, and genuine enthusiasm are all dedicated to ensuring that his clients not only experience a stress-free process but also attain a crystal-clear comprehension of every facet within the realms of buying, selling, or even building.",
    "If you're seeking an advisor who embodies the art of listening and places your aspirations above all else, reaching out to Matt is a step towards a partnership that transcends the ordinary. Don't hesitate to connect with Matt today and embark on a real estate journey that's both exceptional and deeply personalized.",
    "Discover effortless transactions with Matt by your side. His genuine care, patience, and expertise are devoted to providing you with a smooth and transparent journey, whether you're buying, selling, or embarking on a construction project.",
    "Experience the art of real estate with Matt's dedicated guidance. His kindness, unmatched patience, and enthusiasm are your keys to a hassle-free process and a clear understanding of the intricacies involved in real estate transactions.",
  ];

  return (
    <div className="information-page">
      {/* Property Information Section */}
      <div className="property-list px-4">
        <div className="property-image" style={{ width: '300px' }}>
          <img src="matthewameiss.jpg" alt="Matt Ameiss" />
          <h2>Matt Ameiss</h2>
          <p>Real Estate Advisor</p>
          <a href="mailto:MattAmeissRealty@gmail.com">MattAmeissRealty@gmail.com</a>
          <p>(636) 443-5135</p>
          <p>Coldwell Banker Realty</p>
          <a href="https://www.coldwellbankerhomes.com/mo/chesterfield/agent/matthew-matt-ameiss/aid_282014/">Contact Matt</a>
          <a href="https://www.facebook.com/matt.ameiss" style={{ display: 'block', marginTop: '10px' }}>
            <img src="facebooklogo.png" alt="Facebook Logo" style={{ width: '50px', height: '50px' }} />
          </a>
        </div>

        {/* Description Cards */}
        <div className="testimonial-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {descriptions.map((description, index) => (
            <div className="description-card" key={index}>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Office Location Section */}
      <section className="office-section">
        <h2>Matt's Office</h2>
        <p>16505 Wild Horse Creek Road, Chesterfield, MO 63017</p>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.1296721154513!2d-90.57375348465044!3d38.65861077961196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8d1cbbd4dfec1%3A0x6a45f69a9be0e7a8!2s16505%20Wild%20Horse%20Creek%20Rd%2C%20Chesterfield%2C%20MO%2063017%2C%20USA!5e0!3m2!1sen!2sus!4v1692648281870!5m2!1sen!2sus"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default InformationPage;