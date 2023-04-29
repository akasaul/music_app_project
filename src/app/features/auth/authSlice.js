import { createSlice } from "@reduxjs/toolkit";


// responsible for authentication api calls 
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: null,
  }, 
  reducers: {
    test: (state, action) => {
      state.auth = action.payload;
    }
  },
});


export const {test} = authSlice.actions;

export default authSlice.reducer;