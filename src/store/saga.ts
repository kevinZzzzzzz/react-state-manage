import {take,call,put,all,select,fork,takeEvery,takeLatest, delay} from 'redux-saga/effects'
import * as Action from './actionTypes'

function* helloSaga() {
  console.log('hello Sagas')
}
function* getData() {
  const {data} = yield call(window.$api.getDatas)
  yield put({
    type: Action.GET_DATA,
    payload: data
  })
}
function* addCount() {
  yield delay(1000)
  yield put({
    type: Action.ADD_COUNT,
  })
}
function* delCount() {
  yield delay(1000)
  yield put({
    type: Action.DEL_COUNT,
  })
}
function* addTodo(action: any) {
  const todo = action.payload
  // const {data} = yield window.$api.addTodo({
  //   addItem: todo
  // })
  const {data} = yield call(window.$api.addTodo, {addItem: todo})
  yield put({
    type: Action.ADD_TODO,
    payload: data.todoList
  })
}
function* delTodo(action: any) {
  const idx = action.payload
  const {data} = yield window.$api.delTodo({
    index: idx
  })
  yield put({
    type: Action.DEL_TODO,
    payload: data.todoList
  })
}
function* watchAction() {
  yield takeEvery(Action.GET_DATA_START, getData)
  // takeLatest  相当于在takeEvery的基础上加了防抖
  yield takeEvery(Action.ADD_COUNT_START, addCount)
  yield takeEvery(Action.DEL_COUNT_START, delCount)
  // yield takeLatest(Action.ADD_COUNT_START, addCount)
  // yield takeLatest(Action.DEL_COUNT_START, delCount)
  yield takeEvery(Action.ADD_TODO_START, addTodo)
  yield takeEvery(Action.DEL_TODO_START, delTodo)
}
function* mySaga() {
  yield all([helloSaga(), watchAction()])
}

export default mySaga