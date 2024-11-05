import React from 'react';
import MapOrder from '../../components/mapProperty/mapOrder';
import NearPlaces from '../../components/nearPlaces/nearPlaces';
import ReviewForm from '../../components/reviewForm/reviewForm';
import Reviews from '../../components/reviews/reviews';
import PropertyHost from '../../components/propertyHost/propertyHost';
import PropertyInside from '../../components/propertyInside/propertyInside';
import PropertyFeatures from '../../components/propertyFeatures/propertyFeatures';
import PropertyGallery from '../../components/propertyGallery/propertyGallery';
import PropertyName from '../../components/propertyName/propertyName';
import PropertRating from '../../components/propertyRating/propertRating';
import PropertyPrice from '../../components/propertyPrice/propertyPrice';
import {useParams} from 'react-router-dom';
import {useGetCommentsQuery, useGetOffersQuery} from '../../features/sixCitiesApi';

function OfferPage() {
  const param = useParams();
  const {data: offers} = useGetOffersQuery();
  const offer = offers?.find((item) => item.id === Number(param.id));
  const {data: reviews} = useGetCommentsQuery(Number(offer?.id));

  return offer ? (
    <main className="page__main page__main--property">
      <section className="property">
        <PropertyGallery offer={offer} />
        <div className="property__container container">
          <div className="property__wrapper">
            {offer.isPremium && (<div className="property__mark"><span>Premium</span></div>)}
            <PropertyName offer={offer} />
            <PropertRating offer={offer} />
            <PropertyFeatures offer={offer} />
            <PropertyPrice offer={offer} />
            <PropertyInside offer={offer} />
            <PropertyHost offer={offer} />
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews?.length}</span></h2>
              <Reviews offer={offer} />
              <ReviewForm offer={offer} />
            </section>
          </div>
        </div>
        <MapOrder offer={offer} />
      </section>
      <NearPlaces offer={offer} />
    </main>
  ) : (
    <h1>No such property</h1>
  );
}

export default OfferPage;
