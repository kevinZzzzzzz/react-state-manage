import {legacy_createStore as createStore, compose, applyMiddleware, combineReducers} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const store = createStore(
  combineReducers({
    HomePage: reducer
  }),
  composeEnhancers(applyMiddleware(thunk))
)

export default store