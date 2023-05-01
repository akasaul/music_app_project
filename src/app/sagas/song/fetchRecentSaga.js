import { call, put, select, takeEvery } from 'redux-saga/effects';
import { fetchRecentFailure, fetchRecentSuccess } from '../../features/song/songSlice';
import { db } from '../../../firebase/firebase';
import { addDoc, collection, getDoc } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';

// Worker function
function* workFetchRecent () {
  try {

    const res = yield call(() => getDoc(collection(db, 'songs'), (songSnapShot) => {
      console.log(songSnapShot);
    }));

    console.log(res);

    yield put(fetchRecentSuccess());    

  } catch(err) {
    yield put(fetchRecentFailure(err.message));
  }
}

// Add Song saga 
function* fetchRecentSaga() {
  yield takeEvery('song/fetchRecentRequest', workFetchRecent)
}

export default fetchRecentSaga;