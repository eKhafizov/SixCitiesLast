import {NameSpace} from '../../utils/nameSpace';
import {RootState} from '../types';

export const getAuthSelector = (state: Pick<RootState, NameSpace.serverData>) : string => state.SERVER_DATA.auth;
