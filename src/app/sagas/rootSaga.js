import { all } from 'redux-saga/effects';
import signInSaga from './auth/signInSaga';
// import authSaga from './authSaga';
import signUpSaga from './auth/signUpSaga';
import addSong from './song/addSongSaga';
import fetchRecentSaga from './song/fetchRecentSaga';
import searchSaga from './song/searchSaga';
import favSong from './song/favSongSaga';
import setUserSaga from './user/getUser';
import getAllSaga from './song/getAllSaga';
import editSong from './song/editSongSaga';
import deleteSong from './song/deleteSongSaga';
import signOutSaga from './auth/signOutSaga';

export default function* rootSaga() {
  yield all([
    signUpSaga(),
    signInSaga(),
    searchSaga(),
    addSong(),
    fetchRecentSaga(),
    favSong(),
    setUserSaga(),
    getAllSaga(),
    editSong(),
    deleteSong(),
    signOutSaga()
  ])
}
