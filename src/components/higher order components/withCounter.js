import React from "react";

const UpdatedComponenet=(OriginalComponent,increment)=>{
    class NewComponent extends React.Component{
        constructor()
        {
            super()
            this.state={
                count:1
            }
        }
        increment=()=>
        {
            this.setState((prev)=>{
                return {count:prev.count*increment}
            })
        }
        render() {
            return (
                 <OriginalComponent count={this.state.count} {...this.props} increment={this.increment} name="hello"/>
            );
        }
    }
    return NewComponent
}

export default UpdatedComponenet