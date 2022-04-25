import React from "react"
import './classComponents.css'
import FunctionComponent from './FunctionComponent/FunctionComponent'

export default class Classcomponent extends React.Component{
    constructor(props){
      super(props)
      console.log(this.props.UserName)
    }
    render(){
      return (<div>
        <h1 className="center">Hello From Class - App</h1>
        <FunctionComponent/>
        <h3>Created by {this.props.UserName}</h3>
        </div>)
    }
}
//Class based Components