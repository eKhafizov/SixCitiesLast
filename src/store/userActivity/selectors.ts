import {RootState} from '../types';
import {NameSpace} from '../../utils/nameSpace';

export const getUserInfoSelector = (state: Pick<RootState, NameSpace.userActivity>) : string | undefined => state.USER_ACTIVITY.userInfo;
export const getCitySelector = (state: Pick<RootState, NameSpace.userActivity>) : string  => state.USER_ACTIVITY.city;
export const getFilterSelector = (state: Pick<RootState, NameSpace.userActivity>) : string  => state.USER_ACTIVITY.filter;
export const getChosenOffer = (state: Pick<RootState, NameSpace.userActivity>) : number | undefined => state.USER_ACTIVITY.chosenOffer;

