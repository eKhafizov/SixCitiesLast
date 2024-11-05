import React from 'react';
import {OfferType} from '../../types/types';
import {useAppSelector} from '../../store/hooks';
import {useNavigate} from 'react-router-dom';
import {AppRoutes} from '../../routes/AppRoutes';
import {
  useFetchAddFavoriteMutation,
  useFetchRemoveFavoriteMutation,
  useGetFavoritesQuery
} from '../../features/sixCitiesApi';

// {/*place-card__bookmark-button--active*/}
type BookmarkTypeProp = {
  offer: OfferType;
};

function BookmarkMain({offer}: BookmarkTypeProp) {
  const auth = useAppSelector((state) => state.SERVER_DATA.auth);
  const navigate = useNavigate();
  const {data: favorites} = useGetFavoritesQuery();
  const [fetchRemove] = useFetchRemoveFavoriteMutation();
  const [fetchAdd] = useFetchAddFavoriteMutation();
  const isOfferFavorite = favorites?.find((item) => item.id === offer.id);

  const changer = () => {
    if (isOfferFavorite) {
      fetchRemove(offer.id);
    } else {
      fetchAdd(offer.id);
    }
  };

  return auth === 'AUTH'
    ? (
      <button
        className={isOfferFavorite ? 'place-card__bookmark-button button place-card__bookmark-button--active' : 'place-card__bookmark-button button' }
        type='button'
        onClick={changer}
      >
        <svg className='place-card__bookmark-icon' width='18' height='19'>
          <use xlinkHref='#icon-bookmark'></use>
        </svg>
        <span className='visually-hidden'>To bookmarks</span>
      </button>
    )
    : (
      <button
        className={isOfferFavorite ? 'place-card__bookmark-button button place-card__bookmark-button--active' : 'place-card__bookmark-button button' }
        type='button'
        onClick={() => navigate(AppRoutes.Login)}
      >
        <svg className='place-card__bookmark-icon' width='18' height='19'>
          <use xlinkHref='#icon-bookmark'></use>
        </svg>
        <span className='visually-hidden'>To bookmarks</span>
      </button>
    );
}

export default BookmarkMain;
