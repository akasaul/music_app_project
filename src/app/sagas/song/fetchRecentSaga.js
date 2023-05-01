import { call, put, select, takeEvery } from 'redux-saga/effects';
import { fetchRecentFailure, fetchRecentSuccess } from '../../features/song/songSlice';
import { db } from '../../../firebase/firebase';
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';

// Worker function
function* workFetchRecent () {
  try {

    const q = query(collection(db, 'songs'), orderBy('timeStamp', 'desc'), limit(5));
    const songsSnapshot = yield call(() => getDocs(q));

    let songs = [];

    songsSnapshot.forEach((doc) => {
      songs.push({id: doc.id, ...doc.data()});
    })

    yield put(fetchRecentSuccess(songs));    

  } catch(err) {
    yield put(fetchRecentFailure(err.message));
  }
}

// Add Song saga 
function* fetchRecentSaga() {
  yield takeEvery('song/fetchRecentRequest', workFetchRecent)
}

export default fetchRecentSaga;