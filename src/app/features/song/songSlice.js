import { createSlice } from '@reduxjs/toolkit';

// responsible for authentication api calls
const songSlice = createSlice({
  name: 'song',
  initialState: {
    songs: [],
    song: null,
    query: '',
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMsg: '',
    currentState: ''
  },
  reducers: {
    searchRequest: (state, action) => {
      state.isLoading = true;
      state.currentState = 'SEARCH';
    },

    searchRequestSuccess: (state, action) => {
      state.songs = action.payload;
      state.isSuccess = true;
      state.isLoading = false;
    },
    searchRequestFailure: (state, action) => {
      state.isError = true;
      state.isError = action.payload.message;
      state.isLoading = false;
    },
    
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },


    setSong: (state, action) => {
      state.song = action.payload;
    },
    
    addSongRequest: (state, action) => {
      state.isLoading = true;
      state.currentState = 'ADD';
    },
        
    addSongSuccess: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
    },

    addSongFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMsg = action.payload;
    },


    fetchRecentRequest: (state, action) => {
      state.isLoading = true;
      state.currentState = 'FETCH';
    },

    fetchRecentSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
    },

    fetchRecentFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMsg = action.payload;
    },

    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.errorMsg = '';
      state.errorMsg = '';
    }
  },
});

export const { searchRequest, searchRequestFailure, setSearchQuery, searchRequestSuccess, reset, addSongFailure, addSongRequest, addSongSuccess, setSong, fetchRecentFailure, fetchRecentRequest, fetchRecentSuccess } = songSlice.actions;

export default songSlice.reducer;
