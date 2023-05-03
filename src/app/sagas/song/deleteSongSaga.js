import { call, put, select, takeEvery } from 'redux-saga/effects';
import { deleteSongFailure, deleteSongSuccess } from '../../features/song/songSlice';
import { auth, db } from '../../../firebase/firebase';
import { add, addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';

// Worker function
function* workDeleteSong () {
  
  const {songs, songId} = yield select((state) => state.song);

  // For Recovery in optimistic ui update
  const songsBeforeDeletion = songs;

  try {

    const docRef = doc(db, 'songs', songId);

    const res = yield call(() => deleteDoc(docRef));

    yield put(deleteSongSuccess());    

  } catch(err) {
    yield put(deleteSongFailure(songsBeforeDeletion));
  }
}

// Delete Song saga 
function* deleteSong() {
  yield takeEvery('song/deleteSongReq', workDeleteSong)
}

export default deleteSong;