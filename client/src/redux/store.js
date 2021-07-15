import { applyMiddleware, combineReducers, createStore } from 'redux'
import user from '../redux/reducer/userRuducer'
import magazine from '../redux/reducer/magazineReducer'
import {createMagazine} from './middlware/magazineCrud'
import {createUser} from './middlware/userCrud'
const reducer=combineReducers({magazine,user})
const store=createStore(reducer,applyMiddleware(createMagazine,createUser))
window.store=store
export default store;