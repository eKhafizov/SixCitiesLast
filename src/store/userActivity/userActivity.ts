import {createSlice} from "@reduxjs/toolkit";
import {NameSpace} from "../../utils/nameSpace";

type userActivityType = {
  filter: string | undefined;
  city: string | undefined;
}
const initialState: userActivityType = {
  filter: 'Allgenres',
  city: 'Paris',
}

const userActivity = createSlice({
  name: NameSpace.userActivity,
  initialState: initialState,
  reducers: {}
})
export default userActivity;
