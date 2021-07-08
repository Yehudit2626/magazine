import produce from 'immer'
import createReducer from '../reducerUtils'

const initialState={
    posts:[]
}
const postFunctions={
    addNewPost(state, action) {
        state.posts.push(action.payload)
    },
    setAllPostsInStore(state, action) {
        state.posts = action.payload
    },
    deletePost(state, action) {
        state.posts.filter((post)=>post._id!==action.payload)
    },
}
export default produce((state,action)=>
{createReducer(state,action,postFunctions)},initialState)