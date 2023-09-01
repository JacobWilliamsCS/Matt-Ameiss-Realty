import React from 'react';
import './PropertyCard.css';
import './properties'

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>{property.link}</p>
      <p>Price: {property.price}</p>
    </div>
  );
};

export default PropertyCard;