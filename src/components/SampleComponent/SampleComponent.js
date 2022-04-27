import React from "react";

export default class Samplecomponents extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {input:"",
                        element:[]}
      }
    changeinput=(event)=>{
            this.setState({
                input:event.target.value
            })
            console.log(event.target.value)
    }
    submitValue=(event)=>{
        event.preventDefault();
        let inputelem=this.state.input;
        this.setState({element:[...this.state.element,inputelem]})
    }
    ListDelete=(id)=>
    {
        console.log(id)
        // // console.log(element)
    }
    displayFunc()
    {
        let array=Array.from(this.state.element)
        const element=array.map((elem,index)=>{
            return (
                <li key={index} >
                    <div><p>{elem} key={index} </p><button key={index} onClick={()=>this.ListDelete(index)}>delete </button> <button >edit </button></div>                    
                </li>
                
            )
        })
        return (<div>{element}</div>)
    }
    displayList(props)
    {
        return(<div>{props.value}</div>)
    }
    inputFunction()
    {
        return(

            <div>
                <form>
                    <input value={this.state.input} onChange={this.changeinput} type="text" />
                    <button onClick={this.submitValue}>submit</button>
                </form>
                <div>
                {this.displayFunc()}
                </div>
            </div>
        );
    }
      render() {
        return (
        this.inputFunction()

        );
      }
}