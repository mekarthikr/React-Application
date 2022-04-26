import React from "react";
import './ConditionalRendering.css'

export default class ConditionalRendering extends React.Component
{
    constructor()
    {
        super()
        this.state={
            isLoggedIn:false
        }
    }
    DisplayFunction()
    {
        // let message
        // if(this.state.isLoggedIn)
        // {
        //     message=<div><h3>Karthik is logged in</h3></div>
            
        // }
        // else
        // {
        //     message=<div><h3>Karthik is Logged out</h3></div>
            
        // }
        // return message
    }
    render(){
        // return (
        //     <div>
        //  <ConditionalRendering/>
        // <ConditionalRendering/>
        //     </div>

        // );
        // return(this.DisplayFunction())
        return(
            <div>
                <h1>Hello From Class - Conditional Rendering</h1>
                {this.state.isLoggedIn?<div>Karthik is Logged In</div>:<div>Karthik is Logged Out</div>}
            </div>
            
        )
    }
}