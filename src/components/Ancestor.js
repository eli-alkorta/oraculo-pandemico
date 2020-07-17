import React from 'react';
import History1 from './History1';
import History2 from './History2';
import History3 from './History3';

class Ancestor extends React.Component {

  randomize(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
}
  render() {
    let arr = [<History1 state={this.props.location.state}/>, <History2 state={this.props.location.state}/>, <History3 state={this.props.location.state}/>]
    return(
      <div className="ancestor">
        {this.randomize(arr)}
      </div>
    ) 
  }
}

export default Ancestor;