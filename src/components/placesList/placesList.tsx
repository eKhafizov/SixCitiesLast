import React from 'react';
import {OffersArray} from '../../types/types';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../routes/AppRoutes';
import {useAppSelector} from '../../store/hooks';
import {filtersSorting} from '../../utils/utils';
import BookmarkMain from '../bookmarkMain/bookmarkMain';

type PlacesListProps = {
  filterOffersInCity: OffersArray | undefined;
}
function PlacesList({filterOffersInCity} : PlacesListProps) {
  const currentFilter = useAppSelector((state) => state.USER_ACTIVITY.filter);
  // ['Popular', 'Price: high to low', 'Price: low to high', 'Top rated first']
  const filteredOffers = () => {
    if (filterOffersInCity !== undefined) {
      switch (currentFilter) {
        case filtersSorting[0]:
          return [...filterOffersInCity];
          break;
        case filtersSorting[1]:
          return [...filterOffersInCity].sort((a, b) => a.price - b.price);
          break;
        case filtersSorting[2]:
          return [...filterOffersInCity].sort((a, b) => b.price - a.price);
          break;
        case filtersSorting[3]:
          return [...filterOffersInCity].sort((a, b) => a.rating - b.rating);
          break;
        default:
          return [...filterOffersInCity];
      }
    }
    return [];
  };

  return (
    <div className='cities__places-list places__list tabs__content'>
      {
        filteredOffers().map((item) => (
          <article key={item.id} className='cities__card place-card'>
            {item.isPremium && (<div className='place-card__mark'><span>Premium</span></div>)}
            <div className='cities__image-wrapper place-card__image-wrapper'>
              <Link to={`${AppRoutes.Offers}${item.id}`}>
                <img className='place-card__image' src={item.previewImage.replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro')} width='260' height='200' alt='Place image'/>
              </Link>
            </div>
            <div className='place-card__info'>
              <div className='place-card__price-wrapper'>
                <div className='place-card__price'>
                  <b className='place-card__price-value'>&euro;{item.price}</b>
                  <span className='place-card__price-text'>&#47;&nbsp;night</span>
                </div>
                <BookmarkMain offer={item} />
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
