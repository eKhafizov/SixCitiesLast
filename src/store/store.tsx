import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import {sixCitiesApi} from '../features/sixCitiesApi';
import {setupListeners} from '@reduxjs/toolkit/query';

const Store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sixCitiesApi.middleware)
})

setupListeners(Store.dispatch,);
export default Store;
