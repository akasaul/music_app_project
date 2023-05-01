import { createSlice } from '@reduxjs/toolkit';

// responsible for authentication api calls
const songSlice = createSlice({
  name: 'song',
  initialState: {
    songs: [],
    query: '',
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMsg: '',
  },
  reducers: {
    searchRequest: (state, action) => {
      state.isLoading = true;
    },

    searchRequestSuccess: (state, action) => {
      state.isSuccess = true;
      state.songs = action.payload;
    },
    searchRequestFailure: (state, action) => {
      state.isError = true;
      state.isError = action.payload.message;
    },
    
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },

    reset: (state) => {
      state.isError = false;
      state.errorMsg = '';
      state.isLoading = '';
      state.errorMsg = '';
    }
  },
});

export const { searchRequest, searchRequestFailure, setSearchQuery, searchRequestSuccess, reset } = songSlice.actions;

export default songSlice.reducer;
