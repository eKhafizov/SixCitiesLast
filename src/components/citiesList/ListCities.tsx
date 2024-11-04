import React from 'react';
import {citiesList} from '../../utils/utils';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getCity} from '../../store/userActivity/userActivity';

function ListCities() {

  const currentCity = useAppSelector((state) => state.USER_ACTIVITY.city);
  const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            citiesList.map((item) => (
              <li key={item} className="locations__item">
                <a
                  className={currentCity === item ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
                  onClick={(e) => {
                    dispatch(getCity(item));
                  }}
                >
                  <span>{item}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default ListCities;

