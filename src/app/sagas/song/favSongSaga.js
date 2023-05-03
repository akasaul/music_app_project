import { call, put, select, takeEvery } from 'redux-saga/effects';
import { auth, db } from '../../../firebase/firebase';
import { doc, updateDoc, arrayUnion, setDoc, collection, where, query, getDoc, getDocs, arrayRemove } from 'firebase/firestore';
import { setFavs, setFavsError } from '../../features/user/userSlice';

// Worker function
function* workFavSong () {

  const {favId} = yield select((state) => state.user);

  // Optimistic ui Update 
  
  yield put(setFavs(favId));    
  
  try {
    const colRef = collection(db, 'users');

    const q = query(colRef, where('id', '==', auth.currentUser.uid));

    const snapShot = yield call(() => getDocs(q));  

    let id;
    let found = false;

    
    snapShot.docs.forEach(doc => {
      id = doc.id;
    });
    
    snapShot.docs.forEach(doc => {
      if(doc.data().favorites.includes(favId)) {
        found = true;
      }
    })
    
    const docRef = doc(db, 'users', id);
    
    // Check if favorite exists in favs array
    if(found) {
      yield call(() => updateDoc(docRef, {
        favorites: arrayRemove(favId),
      }));  
      return;
    }

    yield call(() => updateDoc(docRef, {
      favorites: arrayUnion(favId),
    }));  

  } catch(err) {
    yield put(setFavsError(favId));    
  }

}

// Fav Song saga 
function* favSong() {
  yield takeEvery('user/setFavsReq', workFavSong)
}

export default favSong;