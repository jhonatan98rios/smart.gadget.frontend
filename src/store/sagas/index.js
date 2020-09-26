import { takeLatest, put, all, call } from 'redux-saga/effects'
import axios from 'axios'

function* asyncGetData(action){
  const data = yield call( axios.post, 'http://jhonatanrios-com.umbler.net/', { text: action.payload } ) /* http://smartgadget.appspot.com/ */
  yield put({ type: 'GET_DATA', payload: data.data })
}

function* asyncGetAnalytics(){
  const data = yield call( axios.get, 'http://jhonatanrios-com.umbler.net/analytics' ) /* http://smartgadget.appspot.com/ */
  const array = [
    { name: "xlow", length: data.data.xlow.length, color:"#013857" },
    { name: "low", length: data.data.low.length, color:"#025D8C" },
    { name: "medium", length: data.data.medium.length, color:"#007AB3" },
    { name: "high", length: data.data.high.length, color:"#0097DC" },
    { name: "xhigh", length: data.data.xhigh.length, color:"#02B9FF" },
    { name: "premium", length: data.data.premium.length, color:"#007AB3" },
    { name: "pro", length: data.data.pro.length, color:"#00AAFF" },
  ]

  yield put({ type: 'GET_ANALYTICS', payload: array })
}

export default function* root(){
  yield all([takeLatest('ASYNC_GET_DATA', asyncGetData)])
  yield all([takeLatest('ASYNC_GET_ANALYTICS', asyncGetAnalytics)])
}