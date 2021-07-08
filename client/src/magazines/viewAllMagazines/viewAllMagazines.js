import { setAutoFreeze } from "immer"
import { useEffect } from "react"
import { connect } from "react-redux"
import ViewOneMagazine from '../viewOneMagazine/viewOneMagazine'
import actions from './actions'

function ViewAllMagazines(props) {

    useEffect(() => {
        props.getAllMagazines()
    }, [])

    const renderMagazine = () => {
        return props.allMagazines && props.allMagazines.map((magazine, index) => {
            return <ViewOneMagazine indexMagazine={index} magazine={magazine}></ViewOneMagazine>
        })
    }
   
    return (
        <>
            {renderMagazine()}
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        allMagazines: state.user.magazines
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        //getAllMagazines: () => dispatch(actions.getAllMagazines())
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(ViewAllMagazines)