import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../utils/nameSpace';
import serverData from './serverData/serverData';
import userActivity from './userActivity/userActivity';
import {sixCitiesApi} from '../features/sixCitiesApi';

const rootReducer = combineReducers({
  [NameSpace.serverData] : serverData.reducer,
  [NameSpace.userActivity] : userActivity.reducer,
  [NameSpace.sixCitiesApi] : sixCitiesApi.reducer,
});

export default rootReducer;

