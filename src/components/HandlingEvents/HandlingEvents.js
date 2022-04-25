import React from "react";
import './HandlingEvents.css'

export default class Handlingevents extends React.Component
{
    constructor(){
        super()
    }
    
    eventHandler()
    {
        function consolePrint(e){
            console.log("hello");
        }
        return(
        <div>
            <h1 className="text-center">Hello From Class - HandlingEvents</h1>
            <button onClick={consolePrint}>Click me</button>
        </div>);
    }
    render(){
        return (this.eventHandler())
    }
}