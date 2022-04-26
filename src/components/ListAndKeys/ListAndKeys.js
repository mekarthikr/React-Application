import React from "react";
import './ListAndKeys.css'

export default class ListAndKeys extends React.Component
{    
    displayList(props)
    {
        return(<p>{props.value}</p>)
    }
    displayFunction()
    {
        const names=['Bruce','Clark','Diana']
        let element =names.map((charName)=>{
            return <this.displayList key={charName} value={charName}/>
        })
        return (
            <div>
                <h1>Hello From Class - List and Keys</h1>
            {element}
            </div>
            
        );
    }
    render()
    {
        return(this.displayFunction());
    }
}