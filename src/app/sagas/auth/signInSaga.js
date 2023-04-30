import { call, put, select, takeEvery } from 'redux-saga/effects';
import {  signInFalure, signInRequest, signInSuccess } from '../../features/auth/authSlice';
import { auth } from '../../../firebase/firebase';
import {  signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

// Worker function
function* workAuth () {
  try {
    const {inputPassword, inputEmail} = yield select((state) => state.auth);

    const res = yield call(() => signInWithEmailAndPassword(auth, inputEmail, inputPassword));

    yield put(signInRequest(res.user));    

  } catch(err) {
    yield put(signInFalure(err.message));
  }
}

// Authentication saga 
function* signInSaga() {
  yield takeEvery('auth/signInRequest', workAuth)
}

export default signInSaga;