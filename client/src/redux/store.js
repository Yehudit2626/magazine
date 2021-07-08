import { applyMiddleware, combineReducers, createStore } from 'redux'
import user from './reducers/employedReducer'
import {createMagazine} from './middlware/magazineCrud'
const reducer=combineReducers({magazine})
const store=createStore(reducer,applyMiddleware(createMagazine))
window.store=store
export default store;