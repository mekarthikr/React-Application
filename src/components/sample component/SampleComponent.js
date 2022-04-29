import React from "react";
import './SampleComponent.css'

export default class Samplecomponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            element: [],
            edit: false,
            editindex: 0
        }
    }
    changeinput = (event) => {
        this.setState({
            input: event.target.value
        })
    }
    submitValue = (event) => {
        event.preventDefault();
        if (!this.state.edit) {
            if (this.state.input === "") {
                alert("Enter a input");
                return false;
            }
            let inputelem = this.state.input;
            this.setState({ element: [...this.state.element, inputelem], input: "" })
        }
        else {
            if (this.state.input === "") {
                alert("Enter a input");
                return false;
            }
            let array = this.state.element;
            array[this.state.editindex] = this.state.input;
            this.setState({
                element: array,
                edit: false,
                editindex: 0,
                input: ""
            })
        }
    }
    ListDelete = (id) => {
        this.setState({
            element: this.state.element.filter((element, index) => {
                return id !== index
            })
        })
    }
    ListEdit(id) {
        this.setState({
            edit: true, editindex: id, input: this.state.element[id]
        })
    }
    displayFunc() {
        let array = Array.from(this.state.element)
        const element = array.map((elem, index) => {
            return (
                <li className="display-inline" key={index} >
                    <div><p>{this.state.element[index]} </p><button className="button-delete" key={index} onClick={() => this.ListDelete(index)}>delete </button> <button className="button-edit"  onClick={() => this.ListEdit(index)}>edit </button></div>
                </li>

            )
        })
        return (<div>{element}</div>)
    }
    displayList(props) {
        return (<div>{props.value}</div>)
    }
    inputFunction() {
        return (

            <div className="container">
                <h1>ToDo List</h1>
                <form className="form-container">
                    <input value={this.state.input} onChange={this.changeinput} type="text" />
                    <button className="todo-submit" onClick={(event) => this.submitValue(event)}>SUBMIT</button>
                </form>
                <div className="todo-list">
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