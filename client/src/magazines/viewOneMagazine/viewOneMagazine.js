import { setAutoFreeze } from "immer"
import { useEffect, useRef, useState } from "react"
import './ViewOneMagazine.css'


export default function ViewOneMagazine(props){
   
    return(
        <>
        <div>
            <h1>{props.magazine.title}</h1>
        </div>
        </>
    )

}


