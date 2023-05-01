import { createSlice } from '@reduxjs/toolkit';

// responsible for authentication api calls
const songSlice = createSlice({
  name: 'song',
  initialState: {
    songs: [],
    recents: [],
    song: null,
    query: '',
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMsg: '',
    currentState: '',
    isPlaying: false,
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
      state.currentState = 'FETCH_RECENT';
    },

    fetchRecentSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.recents = action.payload;
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
    },

    playSong: (state, action) => {
      state.isPlaying = true;
      state.song = action.payload;
    },

    stopSong: (state, action) => {
      state.isPlaying = false;
      state.song = null;
    }

  },
});

export const { searchRequest, searchRequestFailure, setSearchQuery, searchRequestSuccess, reset, addSongFailure, addSongRequest, addSongSuccess, setSong, fetchRecentFailure, fetchRecentRequest, fetchRecentSuccess, playSong, stopSong } = songSlice.actions;

export default songSlice.reducer;
