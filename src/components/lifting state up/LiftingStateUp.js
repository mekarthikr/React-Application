import React from "react";
import Outputclass from "./outputclass/outputclass";
import Inputclass from "./inputclass/inputclass";

export default class Liftingstates extends React.Component
{
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.state = {text: ''};
      }
      
      handleTextChange(newText) {
        this.setState({text: newText});
      }
       
      render() {
        return (
            <React.Fragment>
              <Inputclass text={this.state.text} 
                 handleTextChange={this.handleTextChange}/>
              <Outputclass text={this.state.text} />
            </React.Fragment>
        );
      }
}