import {legacy_createStore as createStore, compose, applyMiddleware, combineReducers} from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga'

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  // reducer模块化
  combineReducers({
    HomePage: reducer
  }),
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(mySaga)
export default store