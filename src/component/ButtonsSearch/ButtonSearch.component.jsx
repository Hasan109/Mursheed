import React from "react";
import "../ButtonsSearch/ButtonSearch.css"

const ButtonSearch=(props)=>{

    return(
        <button type={props.type}  className="btn">{props.name}</button>
    )
}

export default ButtonSearch;