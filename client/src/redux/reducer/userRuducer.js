import produce from 'immer'
import createReducer from '../reducerUtils'

const initialState={
    user:{}
}
const magazin={
    addNewMagazine(state, action) {
        state.magazines.push(action.payload)
    },
    setAllMagazinesInStore(state, action) {
        state.magazines = action.payload
    },
    deleteMagazine(state, action) {
        state.magazines.filter((magazine)=>magazine._id!==action.payload)
    },
}
export default produce((state,action)=>
{createReducer(state,action,magazin)},initialState)