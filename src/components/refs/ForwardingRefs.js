import React, { Component } from "react";

// export default class FRinput extends Component
// {
//     render()
//     {
//         const input=React.forwardRef((props,ref)=>{
//             return(<div><input type="text" ref={ref}/></div>)
//         })
//         return (<input/>)
//     //     return (React.forwardRef((props,ref)=>{
//     //         return(<div><input type="text" ref={ref}/></div>)
//     // }
// }
// }

const FRinput=React.forwardRef((props,ref)=>{
    return(

        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})

export default FRinput