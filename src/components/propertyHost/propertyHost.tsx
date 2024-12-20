import React from 'react';
import {OfferPropType} from '../propertyGallery/propertyGallery';

function PropertyHost({offer} : OfferPropType) {
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src={offer.host.avatarUrl.replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro')} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="property__user-name">{offer.host.name}</span>
        {offer.host.isPro && (<span className="property__user-status">Pro</span>)}
      </div>
      <div className="property__description">
        <p className="property__text">
          {offer.description}
        </p>
      </div>
    </div>
  );
}

export default PropertyHost;
