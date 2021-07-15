import produce from 'immer'
import createReducer from '../reducerUtils'

const initialState={
    user:{}
}
const userFunctions={
    setUserInStore(state, action) {
        state.user = action.payload
    }
}
export default produce((state,action)=>
{createReducer(state,action,userFunctions)},initialState)