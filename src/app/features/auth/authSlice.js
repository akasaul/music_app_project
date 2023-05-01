import { createSlice } from '@reduxjs/toolkit';

// responsible for authentication api calls
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: null,
    inputEmail: '',
    inputPassword: '',
    inputName: '',
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMsg: '',
  },
  reducers: {
    test: (state, action) => {
      state.auth = action.payload;
    },

    signUpRequest: (state) => {
      state.isLoading = true;
    },

    signUpSuccess: (state, action) => {
      state.auth = action.payload;
      state.isLoading = false;
      state.errorMsg = '';
    },

    signUpFalure: (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMsg = action.payload;
    },
    
    setUserData: (state, action) => {
      state.inputEmail = action.payload.email;
      state.inputPassword = action.payload.password;
      state.inputName = action.payload.name;
    },

    signInRequest: (state) => {
      state.isLoading = true;
    },

    signInSuccess: (state, action) => {
      state.auth = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },

    signInFalure: (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMsg = action.payload;
    },

    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.errorMsg = ''; 
    }
    
  },
});

export const { test, signUpFalure, signUpRequest, signUpSuccess, setUserData, signInFalure, signInRequest, signInSuccess, reset } = authSlice.actions;

export default authSlice.reducer;
