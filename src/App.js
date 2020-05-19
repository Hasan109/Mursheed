import React from 'react';
import './App.css';
import ButtonDark from "./component/ButtonDark/ButtonDark.component.jsx";
import ButtonLight from "./component/ButtonLight/ButtonLight.component";
import Select from "./component/Select/Select.component.jsx";
import Input from "./component/Input/Input.component";
import ButtonSearch from "./component/ButtonsSearch/ButtonSearch.component";
import InputEmail from "./component/InputEmail/InputEmail.component";
function App() {
  return (
    <div className="App">
     <ButtonDark name={"Qeydiyyat"}></ButtonDark>
     <div className="py-3">| </div>
     <ButtonLight name={"Daxil Ol"}></ButtonLight>
      <div className="row">
        <div className="col-12 " >
        <Select></Select>
        <Input placeholder={"BeginDate"} type={"date"}/>
        <Input placeholder={"EndDate"} type={"date"}/>
        <ButtonSearch type={"button"} name={"Axtaris edin"} ></ButtonSearch> 
        </div>
        <InputEmail placeholder={"Elektron Poctunuz"} type={"email"}></InputEmail>
      </div>
    </div>
  );
}

export default App;
