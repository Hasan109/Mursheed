import React from "react";
import "../ButtonLight/ButtonLight.css";

const ButtonLight=(props)=>{

    return(
        <button  className="light-btn">{props.name}</button>
    )
}

export default ButtonLight;