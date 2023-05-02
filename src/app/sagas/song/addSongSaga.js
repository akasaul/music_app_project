import { call, put, select, takeEvery } from 'redux-saga/effects';
import { addSongFailure, addSongSuccess } from '../../features/song/songSlice';
import { auth, db } from '../../../firebase/firebase';
import { add, addDoc, collection, doc } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';

// Worker function
function* workAddSong () {
  try {

    const {song} = yield select((state) => state.song);
    

    const res = yield call(() => addDoc(collection(db, 'songs'), {
      ...song, 
      playlists: [], 
      timeStamp: serverTimestamp(),
      postedBy: doc(db, `/users/${auth.currentUser.uid}`)
    }));

    console.log(res);

    yield put(addSongSuccess());    

  } catch(err) {
    yield put(addSongFailure(err.message));
  }
}

// Add Song saga 
function* addSong() {
  yield takeEvery('song/addSongRequest', workAddSong)
}

export default addSong;