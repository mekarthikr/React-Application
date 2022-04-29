import React from "react";

export default class Forms extends React.Component
{
    constructor()
    {
        super()
        this.state={
            username:'',
            topic:'react'
        }
    }
    HandleUserName=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    HandleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    ReactForm()
    {
        return(
        <div>
            <h1>Hello From Class - Forms</h1>
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.HandleUserName}/>
                </div>
                <div>
                    <select value={this.state.topic} onChange={this.HandleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
            </form>
        </div>
        
        )
    }
    render()
    {
        return(this.ReactForm())
    }
}