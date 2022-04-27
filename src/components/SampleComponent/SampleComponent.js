import React from "react";

export default class Samplecomponents extends React.Component
{
    // render(){
    //     return <h1>Hello</h1>
    // }
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red",
                        input:"",
                        element:[]}
      }
    changeinput=(event)=>{
            this.setState({
                input:event.target.value
            })
    }
    submitValue=(event)=>{
        event.preventDefault();
        this.state.element.push(()=>{
            return(
                <button>click</button>
            );
        })
        console.log(this.state.element)
    }
    displayFunc()
    {
        return (<></>{this.state.element.map((element)=>{

        })})
    inputFunction()
    {
        return(

            <div>
                <form>
                    <input value={this.state.input} onChange={this.changeinput} type="text" />
                    <input type="submit" value="Submit" onClick={this.submitValue} />
                </form>
                <div>
                    <this.displayFunc/>
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