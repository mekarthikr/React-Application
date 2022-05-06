import React, { Component } from "react";
import FRinput from "./ForwardingRefs";

export default class ParentRefs extends Component
{
    constructor()
    {
        super()
        this.inputRef=React.createRef()
        }
    clickhandler(){
        console.log(this.inputRef.current.value)
    }
    render()
    {
        return(
            <div>
                <FRinput ref={this.inputRef} />
                <button onClick={()=>this.clickhandler()}>Click</button>
            </div>
            
        )
    }
}