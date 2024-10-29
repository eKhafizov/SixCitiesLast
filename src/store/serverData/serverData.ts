import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../utils/nameSpace';

type serverDataType = {
  auth: string;
}
const initialState: serverDataType = {
  auth: 'NO_AUTH'
}

const serverData = createSlice({
  name: NameSpace.serverData,
  initialState: initialState,
  reducers: {
    getAuth: (state: serverDataType, action: {payload: string}) => {
      state.auth = action.payload;
    }
  }
})
export default serverData;
export const {getAuth} = serverData.actions;
