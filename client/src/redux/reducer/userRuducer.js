import produce from 'immer'
import createReducer from '../reducerUtils'

const initialState={
    user:{}
}
const userFunctions={
    // addNewMagazine(state, action) {
    //     state.magazines.push(action.payload)
    // },
    setUserInStore(state, action) {
        state.user = action.payload
    },
    // deleteMagazine(state, action) {
    //     state.magazines.filter((magazine)=>magazine._id!==action.payload)
    // },
}
export default produce((state,action)=>
{createReducer(state,action,userFunctions)},initialState)