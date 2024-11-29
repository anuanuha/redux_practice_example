import React from "react";
import {useSelector, useDispatch} from "react-redux"

export const Home = ()=>{
    const username = useSelector((state:any)=>state.user.value.username);
    return(
        <div>this is Home page{username}</div>
    )
}