import React from "react";

import "../Input/Input.css"
const Input=(props)=>{
    return(
        <input className="inputClass"  type={props.type} placeholder={props.placeholder}/>
        
        )
}
export default Input;