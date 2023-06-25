import { legacy_createStore as createStore, compose, applyMiddleware, combineReducers } from 'redux'
import reducer from './reducer'

const devtool = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
  combineReducers({HomePage: reducer}),
  compose(devtool)
)

export default store
