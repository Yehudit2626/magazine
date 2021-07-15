import actions from '../actions'
//import {setUserInStore} from '../reducer/userRuducer'
import {setAllMagazinesInStore} from '../reducer/magazineReducer'
import Cookies from 'universal-cookie';

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

export const createUser=({dispatch,getState})=>next=>action=>{
    if(action.type==='CREATE_USER'){

        fetch('http://localhost:3010/createNewUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(action.payload)
        })
            .then((response) => {
                return response.json()
            })
            .then((result)=>{
                debugger
                dispatch(actions.setUserInStore(result.user))
                const cookies = new Cookies();
                  cookies.set('token', result.token, { path: '/' });
                  console.log(cookies.get('token'));
            })
            .catch((error)=>{
                console.log(error);
            });
    }
    
    return next(action);
   }