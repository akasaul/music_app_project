import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../../firebase/firebase";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: auth.currentUser,
    favs: [],
    isLoading: false,
    isSuccess: false,
    favId: null,
  },

  reducers: {
    // Set user data
    setUserReq: (state) => {
      state.isLoading = true;
    },

    setUser: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.favs = action.payload.favorites;
    },

    // Add song to favorites
    setFavsReq: (state, action) => {
      state.isLoading = true;
      state.favId = action.payload;
    },

    setFavs: (state, action) => {
      if(state.favs.includes(action.payload)) {
        state.favs = state.favs.filter(fav => fav !== action.payload);
        return;
      }
      state.favs.push(action.payload);
    },

    setFavsError: (state, action) => {
      state.favs = state.favs.filter(fav => fav !== action.payload);
    }
  }
})

export const { setUser, setFavs, setFavsError, setFavsReq, setUserReq } = userSlice.actions;

export default userSlice.reducer;