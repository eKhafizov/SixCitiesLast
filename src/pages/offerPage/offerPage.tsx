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
import {useDispatch, useSelector} from 'react-redux';

function OfferPage() {
  const param = useParams();
  const offers = [{id: 1}];
  const offer = offers.find((item) => item.id === Number(param.id));

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <PropertyGallery />
        <div className="property__container container">
          <div className="property__wrapper">
            <div className="property__mark">
              <span>Premium</span>
            </div>
            <PropertyName />
            <PropertRating />
            <PropertyFeatures />
            <PropertyPrice />
            <PropertyInside />
            <PropertyHost />
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
              <Reviews />
              <ReviewForm />
            </section>
          </div>
        </div>
        <MapOrder />
      </section>
      <NearPlaces />
    </main>
  );
}

export default OfferPage;
