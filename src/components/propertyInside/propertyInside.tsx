import React from 'react';
import {OfferPropType} from '../propertyGallery/propertyGallery';

function PropertyInside({offer} : OfferPropType) {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {offer.goods.map((item) => (
          <li key={item} className="property__inside-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyInside;
