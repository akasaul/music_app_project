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
    songId: null,
    fetchRecentState: '',
    searchResults: [],
  },
  reducers: {

    // Searching reducers
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

    // Setting up song for play
    setSong: (state, action) => {
      state.song = action.payload;
    },
    
    // create song 
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

    // Fetch recently created songs 
    fetchRecentRequest: (state, action) => {
      state.isLoading = true;
      state.fetchRecentState = 'FETCH_RECENT';
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

    // reset all songs 
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.errorMsg = '';
      state.errorMsg = '';
    },

    // start playing a song
    playSong: (state, action) => {
      state.isPlaying = true;
      state.song = action.payload;
    },

    stopSong: (state, action) => {
      state.isPlaying = false;
      // state.song = null;
    },

    // get all songs
    getAllReq: (state) => {
      state.isLoading = true;
      state.currentState = 'GET_ALL';
    },

    getAllSuccess: (state, action) => {
      state.songs = action.payload;
      state.searchResults = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },

    getAllFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
    },

    // Edit songs reducers
    editSongReq: (state) => {
      state.isLoading = true;
      state.currentState = 'EDIT';
    },

    editSongSuccess: (state, action) => {
      state.song = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },

    editSongFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMsg = action.payload;
    },

    // Delete song reducers 
    deleteSongReq: (state, action) => {
      state.songId = action.payload;
      state.isLoading = true;
      state.currentState = 'DELETE';
      state.songs = state.songs.filter(song => song.id !== action.payload);
    },

    deleteSongSuccess: (state) => {
      state.isLoading = false;
    },

    deleteSongFailure: (state, action) => {
      state.isLoading = false;
      state.songs = action.payload;
    },

    // Song Search 
    searchSong: (state, action) => {
      let query = action.payload.toLowerCase();
      const res = state.songs.filter(song => (
        song.title.toLowerCase().includes(query) ||
        song.album.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query) ||
        song.genre.toLowerCase().includes(query)
      ));

      state.searchResults = [...res, ...state.songs].slice(0, 6);
    }

  },
});

export const { searchRequest, searchRequestFailure, setSearchQuery, searchRequestSuccess, reset, addSongFailure, addSongRequest, addSongSuccess, setSong, fetchRecentFailure, fetchRecentRequest, fetchRecentSuccess, playSong, stopSong, getAllFailure, getAllReq, getAllSuccess, editSongFailure, editSongReq, editSongSuccess, deleteSongFailure, deleteSongReq, deleteSongSuccess, searchSong } = songSlice.actions;

export default songSlice.reducer;
