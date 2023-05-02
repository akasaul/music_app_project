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

    console.log(song);

    const docRef = doc(db, 'songs', song.id);

    const {title, album, artist, duration, genre, imageUrl} = song.formData;
    
    const res = yield call(() => updateDoc(docRef, {
      album,
      artist, 
      duration, 
      genre, 
      imageUrl, 
      title 
    }));

    console.log(res);

    yield put(editSongSuccess());    

  } catch(err) {
    console.log(err);
    yield put(editSongFailure(err.message));
  }
}

// Add Song saga 
function* editSong() {
  yield takeEvery('song/editSongReq', workEditSong)
}

export default editSong;