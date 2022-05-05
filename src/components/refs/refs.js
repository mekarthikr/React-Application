import React, { Component } from "react";

export default class Refs extends Component
{
    constructor()
    {
        super()
        this.inputRef=React.createRef()
    }
    componentDidMount()
    {
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
    handleClick()
    {
        this.inputRef.current.focus()
    }
    render()
    {
        return(
            <div>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.handleClick.bind(this)} >click</button>
            </div>
        )
    }
}