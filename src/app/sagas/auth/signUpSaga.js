import { call, put, select, takeEvery } from 'redux-saga/effects';
import { test, signUpFalure, signUpRequest, signUpSuccess } from '../../features/auth/authSlice';

import { auth, db } from '../../../firebase/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addDoc, collection, doc, setDoc, updateDoc } from 'firebase/firestore';
import { setUser } from '../../features/user/userSlice';

// Worker function
function* workAuth () {
  try {
    const {inputName, inputPassword, inputEmail} = yield select((state) => state.auth);

    const res = yield call(() => createUserWithEmailAndPassword(auth, inputEmail, inputPassword));

    const user = yield call(() => updateProfile(res.user, {
      displayName: inputName
    }));

    console.log(res);

    const response = yield call(() => addDoc(collection(db, 'users'), {
      name: inputName, 
      id: res.user.uid,
      favorites: [],
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