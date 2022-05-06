import React, { Component } from "react";
import Hoverc from "./hoverc";
import UpdatedComponenet from "./withCounter";

class Hoc extends Component
{
    render()
    {
        return(<div>{this.props.name}{this.props.value}<button onClick={()=>this.props.increment()} >Click me {this.props.count}</button><Hoverc/></div>)
    }
}

export default UpdatedComponenet(Hoc,50000)