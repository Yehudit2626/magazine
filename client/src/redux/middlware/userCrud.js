import actions from '../actions'
import {setUserInStore} from '../reducer/userRuducer'
import {setAllMagazinesInStore} from '../reducer/magazineReducer'

export const getUser=({dispatch,getState})=>next=>action=>{
    if(action.type==="GET_USER"){
        fetch(`http://localhost:3010/getUserById/${action.payload}`, {
       method: 'GET',
   }).then(function (response) {
           return response.json()
       }).then(function (result) {
            dispatch(actions.setUserInStore(result.user))
            dispatch(actions.setAllMagazinesInStore(result.user.magazines))
       }).catch((error)=>{
           console.log(error);
       });
       return next(action);
   }
}