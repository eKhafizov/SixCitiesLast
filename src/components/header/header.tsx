import React from 'react';
import {AppRoutes} from '../../routes/AppRoutes';
import {Link, useNavigate} from 'react-router-dom';
import { useAppSelector} from '../../store/hooks';
import {useFetchLogoutMutation, useGetFavoritesQuery} from '../../features/sixCitiesApi';

function Header() : JSX.Element {
  const userInfo = useAppSelector((state) => state.USER_ACTIVITY.userInfo);
  const auth = useAppSelector((state) => state.SERVER_DATA.auth);
  const {data: favorites} = useGetFavoritesQuery();
  //const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [fetchLogout] = useFetchLogoutMutation();

  return auth === 'AUTH'
    ? (
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoutes.Main} className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <button
                    className="header__nav-link header__nav-link--profile"
                    onClick={() => navigate(AppRoutes.Favorites)}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{userInfo}</span>
                    <span className="header__favorite-count">{(favorites?.length !== undefined && favorites?.length > 0) ? favorites?.length : 0}</span>
                  </button>
                </li>
                <li className="header__nav-item">
                  <button
                    className="header__nav-link"
                    onClick={(e) => {
                      fetchLogout();
                      navigate(AppRoutes.Main);}}
                  >
                    <span className="header__signout">Sign out</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    ) : (
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoutes.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
}

export default Header;
