import React, { Component } from "react";
import Childcomponentb from "./childcomponent-B";
import { UserConsumer } from "./userContext";

export default class Childcomponenta extends Component
{
    
    render()
    {
        return(
            <div>
<h2> another method{this.context}</h2>
<Childcomponentb/>
            </div>
        
        )
    }
}
Childcomponenta.contextType=UserConsumer;