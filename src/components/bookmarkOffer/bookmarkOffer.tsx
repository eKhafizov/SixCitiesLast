import React from 'react';
import {OfferPropType} from '../propertyGallery/propertyGallery';
import {useAppSelector} from '../../store/hooks';
import {useNavigate} from 'react-router-dom';
import {AppRoutes} from '../../routes/AppRoutes';
import {
  useFetchAddFavoriteMutation,
  useFetchRemoveFavoriteMutation,
  useGetFavoritesQuery
} from '../../features/sixCitiesApi';

function BookmarkOffer({offer} : OfferPropType) {
  const auth = useAppSelector((state) => state.SERVER_DATA.auth);
  const navigate = useNavigate();
  const {data: favorites} = useGetFavoritesQuery();
  const isOfferFavorite = favorites?.find((item) => item.id === offer.id);
  const [fetchAdd] = useFetchAddFavoriteMutation();
  const [fetchRemove] = useFetchRemoveFavoriteMutation();

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
        className={ isOfferFavorite ? 'property__bookmark-button button property__bookmark-button--active' : 'property__bookmark-button button'}
        type="button"
        onClick={changer}
      >
        <svg className="property__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    )
    :
    (
      <button className="property__bookmark-button button" type="button" onClick={() => navigate(AppRoutes.Login)}>
        <svg className="property__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    );
}

export default BookmarkOffer;
