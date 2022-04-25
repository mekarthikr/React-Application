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
        if(this.state.isLoggedIn)
        {
            return(
                <div><h3>Karthik is logged in</h3></div>
            )
        }
        else
        {
            return(
                <div><h3>Karthik is Logged out</h3></div>
            )
        }
    }
    render(){
        // return (<ConditionalRendering/>);
        return(this.DisplayFunction())
    }
}