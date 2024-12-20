import React from 'react';
import {OfferPropType} from '../propertyGallery/propertyGallery';
import {useGetNearbyOffersQuery} from '../../features/sixCitiesApi';

function NearPlaces({offer} : OfferPropType) {
  const {data} = useGetNearbyOffersQuery(offer.id);
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {data?.map((item) => (
            <article key={item.id} className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src={item.previewImage.replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro')} width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;{item.price}</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{width: '80%'}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">{item.title}</a>
                </h2>
                <p className="place-card__type">{item.type}</p>
              </div>
            </article>))}
        </div>
      </section>
    </div>
  );
}

export default NearPlaces;
