import React from "react"
import './Components.css'
import FunctionComponent from './FunctionComponent/FunctionComponent'

export default class Classcomponent extends React.Component{
    constructor(props){
      super(props)
      console.log(this.props.UserName)
      // this.props.UserName="hola"
    }
    render(){
      return (<div>
        <h1 className="center">Hello From Class - Class Component</h1>
        <FunctionComponent/>
        <h3>Created by {this.props.UserName}</h3>
        <a href="todo" >todo</a>
        </div>)
    }
}
//Class based Components