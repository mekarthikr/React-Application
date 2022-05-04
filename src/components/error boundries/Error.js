import React, { Component } from "react";

export default class Error extends Component
{
    constructor(props)
    {
        super(props)
    }
    checkProp()
    {
        if(this.props.value==='Joker')
        {
            throw new Error("not a hero")
        }
        return(<h1>{this.props.value}</h1>)
    }
    render()
    {
        return(this.checkProp())   
    }
}