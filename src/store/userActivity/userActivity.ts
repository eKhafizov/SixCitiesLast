import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../utils/nameSpace';
import {OfferType} from '../../types/types';
import serverData from '../serverData/serverData';

type userActivityType = {
  filter: string;
  city: string;
  userInfo: string | undefined;
  chosenOffer: number | undefined;
}
const initialState: userActivityType = {
  filter: 'Allgenres',
  city: 'Paris',
  userInfo: undefined,
  chosenOffer: undefined,
}

const userActivity = createSlice({
  name: NameSpace.userActivity,
  initialState: initialState,
  reducers: {
    getFilter: (state, action: {payload: string}) => {
      state.filter = action.payload;
    },
    getCity: (state, action: {payload: string}) => {
      state.city = action.payload;
    },
    getUserInfo: (state, action: {payload: string | undefined}) => {
      state.userInfo = action.payload;
    },
    getChosenOffer: (state, action: {payload: number}) => {
      state.chosenOffer = action.payload;
    },
  }
})
export default userActivity;
export const {
  getFilter,
  getUserInfo,
  getChosenOffer,
  getCity,
} = userActivity.actions;
