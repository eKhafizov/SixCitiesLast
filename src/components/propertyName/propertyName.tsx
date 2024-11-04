import React from 'react';
import {OfferPropType} from '../propertyGallery/propertyGallery';


function PropertyName({offer} : OfferPropType) {
  return (
    <div className="property__name-wrapper">
      <h1 className="property__name">
        {offer.title}
      </h1>
      <button className="property__bookmark-button button" type="button">
        <svg className="property__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </div>
  );
}

export default PropertyName;
