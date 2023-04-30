import { all } from 'redux-saga/effects';
import signInSaga from './auth/signInSaga';
// import authSaga from './authSaga';
import signUpSaga from './auth/signUpSaga';

export default function* rootSaga() {
  yield all([
    signUpSaga(),
    signInSaga(),
  ])
}
