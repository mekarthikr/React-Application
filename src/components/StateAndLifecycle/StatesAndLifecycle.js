import './StatesAndLifecycle.css'
import React from 'react'

export default class StatesAndLifecycle extends React.Component{
    constructor(){
      super()
      this.state={
          Message:"Hola"
      }
    }
    changeMessage(){
        this.setState({
            Message:"Thank you For Clicking"
        })
    }
    render(){
      return (<div>
        <h1 className="center">Hello From Class - State And Lifecycle</h1>
        <h3>Created by {this.props.UserName}</h3>
        <h4>The message in state is <span>{this.state.Message}</span> </h4>
        <button onClick={()=> this.changeMessage()}>Click</button>
        </div>)
    }
}