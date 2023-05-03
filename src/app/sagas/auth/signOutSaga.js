import { call, put, select, takeEvery } from 'redux-saga/effects';
import {  signInFalure, signInSuccess } from '../../features/auth/authSlice';
import { auth } from '../../../firebase/firebase';
import {  signOut } from 'firebase/auth';

// Worker function
function* workAuth () {
  try {
    yield call(() => signOut(auth));

  } catch(err) {
    console.log(err);
  }
}

// Logout saga 
function* signOutSaga() {
  yield takeEvery('auth/signOut', workAuth)
}

export default signOutSaga;