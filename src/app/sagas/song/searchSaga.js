import { call, put, select, takeEvery } from 'redux-saga/effects';
import { searchRequest, searchRequestFailure, searchRequestSuccess,reset } from '../../features/song/songSlice';
import axios from 'axios';

// Worker function
function* workSearch () {
  try {

    const {query} = yield select((state) => state.song);

    console.log(query);

    const options = {
      method: 'GET',
      url: process.env.REACT_APP_API_URL,
      params: {q: query},
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
      }
    };

    const res = yield call(() => axios.request(options));

    let formattedResponse = [];

    if(res.status === 200) {
      formattedResponse = res.data.data.filter(res => res.type === 'track');
      formattedResponse = formattedResponse.slice(0, 10)
      yield put(searchRequestSuccess(formattedResponse));    
    } else {
      throw Error('Failed to fetch');
    }


  } catch(err) {
    yield put(searchRequestFailure(err.message));
  }
}

// Authentication saga 
function* signInSaga() {
  yield takeEvery('song/searchRequest', workSearch)
}

export default signInSaga;