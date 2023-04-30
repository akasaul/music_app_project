import { call, put, takeEvery } from 'redux-saga/effects';
import { test } from '../../features/auth/authSlice';

// Wroker function
function* workAuth () {
  // try {
    const posts = yield call(() => fetch('https://jsonplaceholder.typicode.com/posts'));
    const postsFormatted = yield posts.json();
    yield put(test(postsFormatted.slice(0, 10)));    
  // } catch(err) {
    // yield put(test());
  // }
}

// Authentication saga 
function* authSaga() {
  yield takeEvery('auth/signUpRequest', workAuth)
}

export default authSaga;