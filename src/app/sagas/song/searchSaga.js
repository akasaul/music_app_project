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
      url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
      params: {q: query},
      headers: {
        'X-RapidAPI-Key': '729309ac6amshed43917df263014p14fa44jsn2cd2dddd3716',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };

    
    const res = yield call(() => axios.request(options));

    let formattedResponse = [];

    if(res.status === 200) {
      formattedResponse = res.data.data.filter(res => res.type === 'track');
      formattedResponse = formattedResponse.slice(0, 5)
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