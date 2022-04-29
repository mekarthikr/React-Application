import './StatesAndLifecycle.css'
import React from 'react'

export default class StatesAndLifecycle extends React.Component{
    constructor(){
      super()
      this.state=
      {
          Message:"Hola",
          count:0,
          input:""
      }
    }

    componentDidMount()
    {
        // console.log("Mount is called")
    }

    changeMessage(){
        this.setState({
            Message:"Thank you For Clicking"
        },()=>{
            console.log(this.state.Message)
        })
        console.log(this.state.Message)
    }
    incrementCount(){
        this.setState({
            count:this.state.count+1
        })
    }
    changep(event)
    {
        this.setState({
            input:event.target.value
        })
    }
    containerState(){
        return (
        // <div>
        //     <h1 className="center">Hello From Class - State And Lifecycle</h1>
        //     <h3>Created by {this.props.UserName}</h3>
        //     <h4>The message in state is <span>{this.state.Message}</span> </h4>
        //     <button onClick={()=> this.changeMessage()}>Click</button>
        //     <h4>Increment Operation <span>{this.state.count}</span></h4>
        //     <button onClick={()=>this.incrementCount()}>Click to increment</button>
        //     <div>
        //         <input type="text" onChange={(event)=>this.changep(event)} />
        //         <p>{this.state.input}</p>
        //     </div>
        //     </div>
            <></>
            )
    }
    render(){
      return (
        //   this.containerState()
        <h1>render</h1>
          
          )
    }
}