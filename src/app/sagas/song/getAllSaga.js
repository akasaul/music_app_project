import { call, put, select, takeEvery } from 'redux-saga/effects';
import { fetchRecentFailure, fetchRecentSuccess, getAllFailure, getAllSuccess } from '../../features/song/songSlice';
import { auth, db } from '../../../firebase/firebase';
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';

// Worker function
function* workGetAll () {
  try {

    const q = query(collection(db, 'songs'), orderBy('timeStamp', 'desc'));
    const songsSnapshot = yield call(() => getDocs(q));

    let songs = [];

    songsSnapshot.forEach((doc) => {
      songs.push({id: doc.id, ...doc.data(), postedBy: doc.data().postedBy.id});
    })


    yield put(getAllSuccess(songs));    

  } catch(err) {
    yield put(getAllFailure(err.message));
  }
}

// Get All Songs saga 
function* getAllSaga() {
  yield takeEvery('song/getAllReq', workGetAll)
}

export default getAllSaga;