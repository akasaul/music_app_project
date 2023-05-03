import { call, put, select, takeEvery } from 'redux-saga/effects';
import { editSongFailure, editSongSuccess } from '../../features/song/songSlice';
import { auth, db } from '../../../firebase/firebase';
import { add, addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';
import addSong from './addSongSaga';

// Worker function
function* workEditSong () {
  try {

    const {song} = yield select((state) => state.song);

    const docRef = doc(db, 'songs', song.id);

    const {title, album, artist, duration, genre, imageUrl} = song.formData;

    if(!title || !album || !artist || !duration || !imageUrl) {
      throw Error('Please provide the required fields');
    }
    
    const res = yield call(() => updateDoc(docRef, {
      album,
      artist, 
      duration, 
      genre, 
      imageUrl, 
      title 
    }));

    yield put(editSongSuccess());    

  } catch(err) {
    yield put(editSongFailure(err.message));
  }
}

// Add Song saga 
function* editSong() {
  yield takeEvery('song/editSongReq', workEditSong)
}

export default editSong;