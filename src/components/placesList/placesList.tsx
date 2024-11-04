import React from 'react';
import {OffersArray} from '../../types/types';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../routes/AppRoutes';

type PlacesListProps = {
  filterOffersInCity: OffersArray | undefined;
}

function PlacesList({filterOffersInCity} : PlacesListProps) {
  return (
    <div className='cities__places-list places__list tabs__content'>
      {
        filterOffersInCity?.map((item) => (
          <article key={item.id} className='cities__card place-card'>
            {item.isPremium && (<div className='place-card__mark'><span>Premium</span></div>)}
            <div className='cities__image-wrapper place-card__image-wrapper'>
              <a href='#'>
                <img className='place-card__image' src={item.previewImage.replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro')} width='260' height='200' alt='Place image'/>
              </a>
            </div>
            <div className='place-card__info'>
              <div className='place-card__price-wrapper'>
                <div className='place-card__price'>
                  <b className='place-card__price-value'>&euro;{item.price}</b>
                  <span className='place-card__price-text'>&#47;&nbsp;night</span>
                </div>
                <button className='place-card__bookmark-button button' type='button'>
                  <svg className='place-card__bookmark-icon' width='18' height='19'>
                    <use xlinkHref='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>To bookmarks</span>
                </button>
              </div>
              <div className='place-card__rating rating'>
                <div className='place-card__stars rating__stars'>
                  <span style={{width: '80%'}}></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
              </div>
              <h2 className='place-card__name'>
                <Link to={`${AppRoutes.Offers}${item.id}`} >{item.title}</Link>
              </h2>
              <p className='place-card__type'>{item.type}</p>
            </div>
          </article>))
      }
    </div>
  );
}

export default PlacesList;
