import React from 'react';
import PlacesList from '../../components/placesList/placesList';
import ListCities from '../../components/citiesList/ListCities';
import MapMainSection from '../../components/mapMainSection/mapMainSection';
import Sorting from '../../components/sorting/sorting';

function MainPage() {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <ListCities />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <Sorting />
            <PlacesList />
          </section>
          <MapMainSection />
        </div>
      </div>
    </main>
  );
}

export default MainPage;

