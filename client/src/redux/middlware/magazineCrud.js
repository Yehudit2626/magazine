import actions from "../actions";

export const createMagazine=({dispatch,getState})=>next=>action=>{
    if(action.type==="CREATE_MAGAZINE"){
        fetch('http://localhost:3010/createMagazine', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(action.payload)
        }).then(function (response) {
           return response.json()
       }).then(function (result) {
              dispatch(actions.addNewMagazine(result))
       }).catch((error)=>{
           console.log(error);
       });
    }
    return next(action);
   }
   
export const getAllMagazines=({dispatch,getState})=>next=>action=>{
    if(action.type==="GET_ALL_MAGAZINES"){
        fetch('http://localhost:3010/getAllProducts', {
       method: 'GET',
   }).then(function (response) {
           return response.json()
       }).then(function (result) {
            dispatch(actions.setAllMagazinesInStore(result.magazines))
       }).catch((error)=>{
           console.log(error);
       });
       return next(action);
   }
}