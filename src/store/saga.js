import { put, takeLatest, all, delay } from 'redux-saga/effects'

// eslint-disable-next-line require-yield
function* helloSaga() {
  console.log('Hello Sagas!');
}

// worker saga 
function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

function* watchIncrementAsync() {
  yield takeLatest('INCREMENT_ASYNC', incrementAsync);
}


export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
  ])
}
