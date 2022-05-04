import React from "react"
import { useNavigate } from "react-router-dom"
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
        <input type="button" value="My Button" />
        </div>)
    }
}
//Class based Components