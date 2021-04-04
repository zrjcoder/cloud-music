import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import * as home from './home/reducer.js'
import thunk from 'redux-thunk'

let store = createStore(
  combineReducers({ ...home }),
  applyMiddleware(thunk)
)

export default store