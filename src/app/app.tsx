import {Route, Routes, useSearchParams} from 'react-router-dom';
import ErrorPage from '../pages/errorPage/errorPage';
import {AppRoutes} from '../routes/AppRoutes';
import MainPage from '../pages/mainPage/mainPage';
import OfferPage from '../pages/offerPage/offerPage';
import LoginPage from '../pages/loginPage/loginPage';
import PrivateRoute from '../components/privateRoute/privateRoute';
import FavoritesPage from '../pages/favoritesPage/favoritesPage';
import {useAppSelector} from '../store/hooks';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getFilter} from '../store/userActivity/userActivity';
import Layout from '../components/layout/layout';


function App(): JSX.Element {

  const auth = useAppSelector((state) => state.SERVER_DATA.auth);
  const dispatch = useDispatch();
  const [searchParam, ] = useSearchParams();
  const filterInParams = searchParam.get('filter');
  const cityInParams = searchParam.get('city');

  useEffect(() => {
    filterInParams !== null && filterInParams !== undefined && dispatch(getFilter(filterInParams));
    cityInParams !== null && cityInParams !== undefined && dispatch(getFilter(cityInParams));
  },[]);

  return (
    <Routes>
      <Route path={AppRoutes.Main} element={<Layout />} >
        <Route index element={<MainPage />}/>
        <Route path=':filter/:city' element={<MainPage />} />
        <Route path={AppRoutes.Offers} >
          <Route path=':id' element={<OfferPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
        <Route path={AppRoutes.Favorites} element={<PrivateRoute auth={auth}><FavoritesPage /></PrivateRoute> }/>
      </Route>
      <Route path={AppRoutes.Login} element={<LoginPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}
export default App;
