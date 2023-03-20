import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fristName: "",
  lastName: "",
  city: "",
  address: "",
  email: "",
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    getUserData: (state, action) => {
      state.fristName = action.payload.fristName;
      state.lastName = action.payload.lastName;
      state.city = action.payload.city;
      state.address = action.payload.address;
      state.email = action.payload.email;
    },
  },
});

export const { getUserData } = userSlice.actions;
export default userSlice.reducer;
