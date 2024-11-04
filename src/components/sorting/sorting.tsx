import React, {useState} from 'react';
import {OffersArray} from '../../types/types';
import {filtersSorting} from '../../utils/utils';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getFilter} from '../../store/userActivity/userActivity';

type PlacesListProps = {
  filterOffersInCity: OffersArray | undefined;
}
function Sorting({ filterOffersInCity }: PlacesListProps) {

  const dispatch = useAppDispatch();
  const currentSorting = useAppSelector((state) => state.USER_ACTIVITY.filter);
  const [open, setIsOpen] = useState(false);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" onClick={(e) => setIsOpen((prev) => !prev)}> {currentSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {
        open && (
          <ul className="places__options places__options--custom places__options--opened">
            {filtersSorting.map((item) => (
              <li
                key={item}
                className={item === currentSorting ? 'places__option places__option--active' : 'places__option'}
                onClick={(e) => {
                  dispatch(getFilter(item));
                  setIsOpen((prev) => !prev);
                }}
              >
                {item}
              </li>))}
          </ul>)
      }
    </form>
  );
}

export default Sorting;
