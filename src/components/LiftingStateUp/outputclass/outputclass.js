import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
  
class Outputclass extends Component {
  
render() {
    return (
        <div>
            <h3>Output: {this.props.text}</h3>
            {/* <Link to={"home/path"}><button to="home/path">click</button></Link> */}
            {/* <Link to="home/path">hello</Link> */}
            <a href='home/path'>click</a>
        </div>        
    );
}
}
      
export default Outputclass;