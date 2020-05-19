import React from "react";
import ButtonSend from "../ButtonSend/ButtonSend.component"
import "../InputEmail/InputEmail.css"
const InputEmail=(props)=>{

    return (

        <div className="send">
            <input className="InputEmail" type={props.type} placeholder={props.placeholder} />
            <ButtonSend></ButtonSend>
        </div>
        
    )
}
export default InputEmail;