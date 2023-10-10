
import React, { useState } from 'react';

import './PropertyCard.css';
import './properties'

const PropertyCard = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="property-card">
      <h2>{property.name}</h2>
      <p>{property.description}</p>
      <p>{property.link}</p>
      <p>Price: {property.price}</p>
      <div className="image-container">
        <button className="arrow-button left" onClick={previousImage}>
          &lt;
        </button>
        <img
        src={property.images[currentImageIndex]} alt=""
          //alt={`Image ${currentImageIndex + 1}`}
        />
        <button className="arrow-button right" onClick={nextImage}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;