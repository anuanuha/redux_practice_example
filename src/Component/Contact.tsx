import React from "react";
import {useSelector, useDispatch} from "react-redux"
export const Contact = ()=>{
    const username = useSelector((state:any)=>state.user.value.username);
    return(
      
        <div>this is contact page  {username}</div>
    )
}