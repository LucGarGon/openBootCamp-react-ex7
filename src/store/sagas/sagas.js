/* eslint-disable func-names */
/* eslint-disable no-use-before-define */
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { API_CALL_REQUEST } from '../actions/asyncActions';

export function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}
export function* workerSaga(action) {
  try {
    const response = yield call(fetchHttp(action.payload.request));
    const { token } = response.data;
    yield put({
      type: action.payload.okAction,
      payload: {
        token,
      },
    });
  } catch (error) {
    yield put({
      type: action.payload.failAction,
      payload: {
        error,
      },
    });
  }
}

function fetchHttp(request) {
  return function () {
    return (axios(request));
  };
}
