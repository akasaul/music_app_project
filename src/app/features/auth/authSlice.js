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

    // Sign up reducers
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
    

    // set user data for accepting from form
    setUserData: (state, action) => {
      state.inputEmail = action.payload.email;
      state.inputPassword = action.payload.password;
      state.inputName = action.payload.name;
    },

    // sign in reducers 
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

    // signOut 
    signOut: (state, action) => {
      state.auth = null;
    },

    // reset all states  
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.errorMsg = ''; 
    }
    
  },
});

export const { test, signUpFalure, signUpRequest, signUpSuccess, setUserData, signInFalure, signInRequest, signInSuccess, signOut, reset } = authSlice.actions;

export default authSlice.reducer;
