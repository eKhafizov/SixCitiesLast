import React from 'react';
import {OfferPropType} from '../propertyGallery/propertyGallery';

function PropertyFeatures({offer}:OfferPropType) {
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        type: {offer.type}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {offer.bedrooms} bedrooms
      </li>
      <li className="property__feature property__feature--adults">
        Max {offer.maxAdults} adults
      </li>
    </ul>
  );
}

export default PropertyFeatures;
