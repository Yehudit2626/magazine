import { applyMiddleware, combineReducers, createStore } from 'redux'
import user from './reducers/employedReducer'
import {getAllEmployed} from './middleware/employedCrud'
const reducer=combineReducers({user})
const store=createStore(reducer,applyMiddleware(getAllEmployed))
window.store=store
export default store;