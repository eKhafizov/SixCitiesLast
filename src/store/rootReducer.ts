import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../utils/nameSpace';
import serverData from './serverData/serverData';
import userActivity from './userActivity/userActivity';

const rootReducer = combineReducers({
  [NameSpace.serverData] : serverData.reducer,
  [NameSpace.userActivity] : userActivity.reducer,
});

export default rootReducer;

