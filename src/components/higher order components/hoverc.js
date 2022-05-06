import React, { Component } from "react";
import UpdatedComponenet from "./withCounter";

class Hoverc extends Component
{
    render() {
        return (
             <div>
                 <h2 onMouseOver={()=>this.props.increment()}>hover me {this.props.count}</h2>
             </div>
        );
    }
}
export default UpdatedComponenet(Hoverc,5)