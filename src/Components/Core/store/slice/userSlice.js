import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    auth: 0,
    loading: false,
    details: {},
  },
  reducers: {
    loginRequest(state, action) {
      state.loading = true;
    },
    loginUser(state, action) {
      state.loading = false;
      state.auth = 1;
      state.details = action.payload;
    },
    logoutUser(state, action) {
      state.loading = false;
      state.auth = 0;
      state.details = {};
    },
  },
});
export default userSlice.reducer;
export const { loginUser, logoutUser, loginRequest } = userSlice.actions;
