import React, { useState } from "react"
import {useSelector, useDispatch} from "react-redux"
import { login, logout } from "../Store.ts"


export const Login =()=>{
    const dispatch = useDispatch()
    const username = useSelector((state:any)=>state.user.value.username);
    const [newusername, setNewUsername] = useState("")
    return(
        <div><h1>this is Login page {username}</h1>
        <input type="text" placeholder="enter username" onChange={(event) => { setNewUsername(event.target.value) } }></input>
        <button onClick={()=>dispatch(login({username:newusername}))}>login</button>
        <button onClick={()=>dispatch(logout())}>logout</button>
        </div>
    )
}