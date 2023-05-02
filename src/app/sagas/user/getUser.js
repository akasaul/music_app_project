import { call, put, takeEvery } from 'redux-saga/effects';
import { auth, db } from '../../../firebase/firebase';
import { collection, where, query, getDocs } from 'firebase/firestore';
import { setUser } from '../../features/user/userSlice';

// Worker function
function* workUser () {

  try {

    if(!auth.currentUser) {
      throw Error('Not Logged In');
    }

    const colRef = collection(db, 'users');

    const q = query(colRef, where('id', '==', auth.currentUser.uid));

    const snapShot = yield call(() => getDocs(q)); 
    
    let user;

    snapShot.docs.forEach(doc => {
      user = {id: doc.id, ...doc.data()};
    });

    yield put(setUser(user));    

  } catch(err) {
    // console.log(err);
  }
}

// get User from firebase Saga
function*  setUserSaga() {
  yield takeEvery('user/setUserReq', workUser)
}

export default setUserSaga;