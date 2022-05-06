import { Component } from "react";
import PortalDemo from "./portal";
import React from "react";

export default class PortClick extends Component
{
    constructor()
    {
        
        super()
        this.state=({
            display:false
        })
    }
    displayFunction()
    {
        this.setState({
            display:true
        })
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.displayFunction()} >click</button>
                {this.state.display?<PortalDemo ></PortalDemo>:null}
</div>

        );
    }
}