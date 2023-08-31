import React from 'react';
import './PropertyCard.css';
import PropertyCard from './PropertyCard';
import properties from './properties'

const PropertiesPage = ({ property }) => {
  return (
           <div className="properties">
    {properties.map(property => (
      <PropertyCard key={property.id} property={property} />
    ))}
    </div>
  );


    }
    export default PropertiesPage;