import React, { Component } from "react";
import { UserConsumer } from "./userContext";

export default class Childcomponentb extends Component
{
    render()
    {
        return(
        <UserConsumer>
        {
            (thing)=>{
                return <h3>{thing}</h3>
            }
        }
        </UserConsumer>
        )
    }
}