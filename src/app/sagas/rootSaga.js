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
  ])
}
