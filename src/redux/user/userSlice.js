import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: false,
  userPlan: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    setUserPlan: (state, action) => {
      state.userPlan = action.payload;
    }
  },
});

export const { login, logout, setUserPlan } = userSlice.actions;


export const selectUser = (state) => state.user.user;
export const selectIsLoggin = (state) => state.user.isLoggedIn;
export const selectUserPlan = (state) => state.user.userPlan;


export default userSlice.reducer;
