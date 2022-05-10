import { PropTypes } from "prop-types";
import React, { Component } from "react";

export default class User extends Component
{
    render()
    {
        return(
            <div>
                {this.props.name()}
                {this.props.prop}
            </div>
        )
    }
}

//Prop Types

User.propTypes={
    prop:PropTypes.string
}