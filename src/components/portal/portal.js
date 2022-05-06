import React, { Component } from "react"
import  ReactDOM  from "react-dom"
import PortClick from "./protalClick"

export default class PortalDemo extends Component
{
    render() {
        return ReactDOM.createPortal(
            <div>portal
            </div>,document.getElementById('main-root')
        )
    }
}

// export default PortalDemo