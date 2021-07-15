import React,{useRef} from 'react'
import { connect } from 'react-redux'
import actions from '../../redux/actions'

const mapDispatchToProps=(dispatch)=>{
    return{
        createNewUser:(user)=>dispatch(actions.createUser(user))
    }
}

export default connect(undefined,mapDispatchToProps) (function CreateUser(props){

    let refName=useRef('')
    let refPassword=useRef('')

    const saveUser=()=>{
        let newUser={name:refName.current.value,password:refPassword.current.value}
        props.createNewUser(newUser)
    }

    return(
        <>
        <form>
            <h2>משתמש חדש</h2>
            <div>
                <label>שם משתמש</label>
                <input type="text" ref={refName}></input>
            </div>
            <div >
                <label >סיסמא</label>
                <input type="password" ref={refPassword}></input>
            </div>
            <button type="submit" onClick={saveUser}>שמור</button>
        </form>
       
        </>
    )
})