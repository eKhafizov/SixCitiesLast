import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../routes/AppRoutes';
import {useGetFavoritesQuery} from '../../features/sixCitiesApi';
import BookmarkMain from '../../components/bookmarkMain/bookmarkMain';

function FavoritesPage() {
  const {data: favorites} = useGetFavoritesQuery();
  const offersInParis = favorites?.filter((item) => item.city.name === 'Paris');
  const offersInCologne = favorites?.filter((item) => item.city.name === 'Cologne');
  const offersInBrussels = favorites?.filter((item) => item.city.name === 'Brussels');
  const offersInAmsterdam = favorites?.filter((item) => item.city.name === 'Amsterdam');
  const offersInHamburg = favorites?.filter((item) => item.city.name === 'Hamburg');
  const offersInDusseldorf = favorites?.filter((item) => item.city.name === 'Dusseldorf');

  return (
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                offersInParis && offersInParis.length > 0 && (
                  <li className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to={AppRoutes.Main}><span>Paris</span></Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {
                        offersInParis.map((item) => (
                          <article key={item.id} className="favorites__card place-card">
                            {item.isPremium && (<div className="place-card__mark"><span>Premium</span></div>)}
                            <div className="favorites__image-wrapper place-card__image-wrapper">
                              <Link to={`${AppRoutes.Offers}${item.id}`}><img className="place-card__image" src={item.previewImage.replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro')} width="150" height="110" alt="Place image"/></Link>
                            </div>
                            <div className="favorites__card-info place-card__info">
                              <div className="place-card__price-wrapper">
                                <div className="place-card__price">
                                  <b className="place-card__price-value">&euro;{item.price}</b>
                                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                                </div>
                                <BookmarkMain offer={item} />
                              </div>
                              <div className="place-card__rating rating">
                                <div className="place-card__stars rating__stars">
                                  <span style={{width: '100%'}}></span>
                                  <span className="visually-hidden">Rating</span>
                                </div>
                              </div>
                              <h2 className="place-card__name">
                                <Link to={`${AppRoutes.Offers}${item.id}`}>{item.title}</Link>
                              </h2>
                              <p className="place-card__type">{item.type}</p>
                            </div>
                          </article>
                        ))
                      }
                    </div>
                  </li>
                )
              }
              {
                offersInHamburg && offersInHamburg.length > 0 && (
                  <li className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to={AppRoutes.Main}>
                          <span>Hamburg</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {
                        offersInHamburg.map((item) => (
                          <article key={item.id} className="favorites__card place-card">
                            {item.isPremium && (<div className="place-card__mark"><span>Premium</span></div>)}
                            <div className="favorites__image-wrapper place-card__image-wrapper">
                              <Link to={`${AppRoutes.Offers}${item.id}`}><img className="place-card__image" src={item.previewImage.replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro')} width="150" height="110" alt="Place image"/></Link>
                            </div>
                            <div className="favorites__card-info place-card__info">
                              <div className="place-card__price-wrapper">
                                <div className="place-card__price">
                                  <b className="place-card__price-value">&euro;{item.price}</b>
                                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                                </div>
                                <BookmarkMain offer={item} />
                              </div>
                              <div className="place-card__rating rating">
                                <div className="place-card__stars rating__stars">
                                  <span style={{width: '100%'}}></span>
                                  <span className="visually-hidden">Rating</span>
                                </div>
                              </div>
                              <h2 className="place-card__name">
                                <Link to={`${AppRoutes.Offers}${item.id}`}>{item.title}</Link>
                              </h2>
                              <p className="place-card__type">{item.type}</p>
                            </div>
                          </article>
                        ))
                      }
                    </div>
                  </li>
                )
              }
              {
                offersInBrussels && offersInBrussels.length > 0 && (
                  <li className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to={AppRoutes.Main}>
                          <span>Brussels</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {
                        offersInBrussels.map((item) => (
                          <article key={item.id} className="favorites__card place-card">
                            {item.isPremium && (<div className="place-card__mark"><span>Premium</span></div>)}
                            <div className="favorites__image-wrapper place-card__image-wrapper">
                              <Link to={`${AppRoutes.Offers}${item.id}`}><img className="place-card__image" src={item.previewImage.replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro')} width="150" height="110" alt="Place image"/></Link>
                            </div>
                            <div className="favorites__card-info place-card__info">
                              <div className="place-card__price-wrapper">
                                <div className="place-card__price">
                                  <b className="place-card__price-value">&euro;{item.price}</b>
                                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                                </div>
                                <BookmarkMain offer={item} />
                              </div>
                              <div className="place-card__rating rating">
                                <div className="place-card__stars rating__stars">
                                  <span style={{width: '100%'}}></span>
                                  <span className="visually-hidden">Rating</span>
                                </div>
                              </div>
                              <h2 className="place-card__name">
                                <Link to={`${AppRoutes.Offers}${item.id}`}>{item.title}</Link>
                              </h2>
                              <p className="place-card__type">{item.type}</p>
                            </div>
                          </article>
                        ))
                      }
                    </div>
                  </li>
                )
              }
              {
                offersInCologne && offersInCologne.length > 0 && (
                  <li className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to={AppRoutes.Main}>
                          <span>Cologne</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {
                        offersInCologne.map((item) => (
                          <article key={item.id} className="favorites__card place-card">
                            {item.isPremium && (<div className="place-card__mark"><span>Premium</span></div>)}
                            <div className="favorites__image-wrapper place-card__image-wrapper">
                              <Link to={`${AppRoutes.Offers}${item.id}`}><img className="place-card__image" src={item.previewImage.replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro')} width="150" height="110" alt="Place image"/></Link>
                            </div>
                            <div className="favorites__card-info place-card__info">
                              <div className="place-card__price-wrapper">
                                <div className="place-card__price">
                                  <b className="place-card__price-value">&euro;{item.price}</b>
                                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                                </div>
                                <BookmarkMain offer={item} />
                              </div>
                              <div className="place-card__rating rating">
                                <div className="place-card__stars rating__stars">
                                  <span style={{width: '100%'}}></span>
                                  <span className="visually-hidden">Rating</span>
                                </div>
                              </div>
                              <h2 className="place-card__name">
                                <Link to={`${AppRoutes.Offers}${item.id}`}>{item.title}</Link>
                              </h2>
                              <p className="place-card__type">{item.type}</p>
                            </div>
                          </article>
                        ))
                      }
                    </div>
                  </li>
                )
              }
              {
                offersInAmsterdam && offersInAmsterdam.length > 0 && (
                  <li className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to={AppRoutes.Main}>
                          <span>Amsterdam</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {
                        offersInAmsterdam.map((item) => (
                          <article key={item.id} className="favorites__card place-card">
                            {item.isPremium && (<div className="place-card__mark"><span>Premium</span></div>)}
                            <div className="favorites__image-wrapper place-card__image-wrapper">
                              <Link to={`${AppRoutes.Offers}${item.id}`}><img className="place-card__image" src={item.previewImage.replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro')} width="150" height="110" alt="Place image"/></Link>
                            </div>
                            <div className="favorites__card-info place-card__info">
                              <div className="place-card__price-wrapper">
                                <div className="place-card__price">
                                  <b className="place-card__price-value">&euro;{item.price}</b>
                                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                                </div>
                                <BookmarkMain offer={item} />
                              </div>
                              <div className="place-card__rating rating">
                                <div className="place-card__stars rating__stars">
                                  <span style={{width: '100%'}}></span>
                                  <span className="visually-hidden">Rating</span>
                                </div>
                              </div>
                              <h2 className="place-card__name">
                                <Link to={`${AppRoutes.Offers}${item.id}`}>{item.title}</Link>
                              </h2>
                              <p className="place-card__type">{item.type}</p>
                            </div>
                          </article>
                        ))
                      }
                    </div>
                  </li>
                )
              }
              {
                offersInDusseldorf && offersInDusseldorf.length > 0 && (
                  <li className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to={AppRoutes.Main}>
                          <span>Dusseldorf</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {
                        offersInDusseldorf.map((item) => (
                          <article key={item.id} className="favorites__card place-card">
                            {item.isPremium && (<div className="place-card__mark"><span>Premium</span></div>)}
                            <div className="favorites__image-wrapper place-card__image-wrapper">
                              <Link to={`${AppRoutes.Offers}${item.id}`}><img className="place-card__image" src={item.previewImage.replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro')} width="150" height="110" alt="Place image"/></Link>
                            </div>
                            <div className="favorites__card-info place-card__info">
                              <div className="place-card__price-wrapper">
                                <div className="place-card__price">
                                  <b className="place-card__price-value">&euro;{item.price}</b>
                                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                                </div>
                                <BookmarkMain offer={item} />
                              </div>
                              <div className="place-card__rating rating">
                                <div className="place-card__stars rating__stars">
                                  <span style={{width: '100%'}}></span>
                                  <span className="visually-hidden">Rating</span>
                                </div>
                              </div>
                              <h2 className="place-card__name">
                                <Link to={`${AppRoutes.Offers}${item.id}`}>{item.title}</Link>
                              </h2>
                              <p className="place-card__type">{item.type}</p>
                            </div>
                          </article>
                        ))
                      }
                    </div>
                  </li>
                )
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoutes.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </>
  );
}

export default FavoritesPage;
