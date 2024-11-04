import React from 'react';
import {OfferType} from '../../types/types';

export type OfferPropType = {
  offer: OfferType;
}
function PropertyGallery({offer}: OfferPropType) {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          offer.images.map((item) => (
            <div key={item} className="property__image-wrapper">
              <img className="property__image" src="img/room.jpg" alt="Photo studio"/>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default PropertyGallery;
