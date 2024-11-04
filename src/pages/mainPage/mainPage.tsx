import React from 'react';
import PlacesList from '../../components/placesList/placesList';
import ListCities from '../../components/citiesList/ListCities';
import MapMainSection from '../../components/mapMainSection/mapMainSection';
import Sorting from '../../components/sorting/sorting';
import {useGetOffersQuery} from '../../features/sixCitiesApi';
import {useAppSelector} from '../../store/hooks';

function MainPage() {
  const {data: offers} = useGetOffersQuery();
  const chosenCity = useAppSelector((state) => state.USER_ACTIVITY.city);
  const filterOffersInCity = offers?.filter((offer) => offer.city.name === chosenCity);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <ListCities />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{filterOffersInCity?.length} places to stay in {chosenCity}</b>
            <Sorting filterOffersInCity={filterOffersInCity} />
            <PlacesList filterOffersInCity={filterOffersInCity} />
          </section>
          <MapMainSection />
        </div>
      </div>
    </main>
  );
}

export default MainPage;

