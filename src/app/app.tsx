import {Route, Routes} from "react-router-dom";
import ErrorPage from "../pages/errorPage/errorPage";
import {AppRoutes} from "../routes/AppRoutes";
import MainPage from "../pages/mainPage/mainPage";
import OfferPage from "../pages/offerPage/offerPage";
import LoginPage from "../pages/loginPage/loginPage";
import PrivateRoute from "../components/privateRoute/privateRoute";
import FavoritesPage from "../pages/favoritesPage/favoritesPage";
import {useAppSelector} from "../store/hooks";


function App(): JSX.Element {

  const auth = useAppSelector((state) => state.SERVER_DATA.auth);

  return (
    <Routes>
      <Route path={AppRoutes.Main} element={<h1>Layout</h1>}>
        <Route index element={<MainPage />}/>
        <Route path=':filter/:city' element={<MainPage />} />
        <Route path={AppRoutes.Offers} >
          <Route path=':id' element={<OfferPage />}/>
          <Route path='*' element={<ErrorPage />} />
        </Route>
        <Route path={AppRoutes.Login} element={<LoginPage />} />
        <Route path={AppRoutes.Favorites} element={
          <PrivateRoute auth={auth}>
            <FavoritesPage />
          </PrivateRoute>}
        />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}
export default App;
