import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import songSlice from "./features/song/songSlice";
import rootSaga from './sagas/rootSaga';


const saga = createSagaMiddleware();

// App Wide Store - Sagas and Slices
const store = configureStore({
  reducer: {
    auth: authSlice,
    song: songSlice,
  },
  middleware: [saga],
});

saga.run(rootSaga);

export default store;