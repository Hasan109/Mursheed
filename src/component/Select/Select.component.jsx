import React, { Component } from 'react'

import "../Select/Select.css"
class Select extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 country:[ "Azerbaijan","Turkiye"]
        }
    }

    render() {
        return (

            <select className="selectBox" name="" id="">
          {this.state.country.map(list=>(

              <option key={list} value={list}>{list}</option>
          ))}
            </select>
        )
    }
}

export default Select
