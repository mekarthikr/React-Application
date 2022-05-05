import React, { Component } from "react";
import ForwardingRefs from "./ForwardingRefs";

export default class ParentRefs extends Component
{
    constructor()
    {
        super()
        this.inputRef=React.createRef()
        }
    clickhandler(){
        console.log(this.inputRef.current)
    }
    render()
    {
        return(
            <div>
                <ForwardingRefs ref={this.inputRef} />
                <button onClick={()=>this.clickhandler()}>Click</button>
            </div>
            
        )
    }
}