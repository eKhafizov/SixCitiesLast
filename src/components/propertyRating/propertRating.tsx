import React from 'react';
import {OfferPropType} from '../propertyGallery/propertyGallery';

function PropertRating({offer} : OfferPropType) {
  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{width: '80%'}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{offer.rating}</span>
    </div>
  );
}

export default PropertRating;
