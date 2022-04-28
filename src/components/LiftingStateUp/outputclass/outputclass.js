import React,{ Component } from 'react';
  
class Outputclass extends Component {
  
render() {
    return (
        <h3>Output: {this.props.text}</h3>
    );
}
}
      
export default Outputclass;