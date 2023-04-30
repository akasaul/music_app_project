import { call, put, select, takeEvery } from 'redux-saga/effects';
import { test, signUpFalure, signUpRequest, signUpSuccess } from '../../features/auth/authSlice';

import { auth } from '../../../firebase/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

// Worker function
function* workAuth () {
  try {
    const {inputName, inputPassword, inputEmail} = yield select((state) => state.auth);

    const res = yield call(() => createUserWithEmailAndPassword(auth, inputEmail, inputPassword));

    const user = yield call(() => updateProfile(res.user, {
      displayName: inputName
    }));

    // const postsFormatted = yield posts.json();
    yield put(signUpSuccess(user));    
  } catch(err) {
    yield put(signUpFalure(err.message));
  }
}

// Authentication saga 
function* signUpSaga() {
  yield takeEvery('auth/signUpRequest', workAuth)
}

export default signUpSaga;