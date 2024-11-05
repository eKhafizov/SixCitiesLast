import React from 'react';
import {OfferPropType} from '../propertyGallery/propertyGallery';
import BookmarkOffer from '../bookmarkOffer/bookmarkOffer';


function PropertyName({offer} : OfferPropType) {
  return (
    <div className="property__name-wrapper">
      <h1 className="property__name">
        {offer.title}
      </h1>
      <BookmarkOffer offer={offer} />
    </div>
  );
}

export default PropertyName;
