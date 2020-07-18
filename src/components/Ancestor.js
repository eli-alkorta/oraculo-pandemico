import React from 'react';
import History1 from './History1';
import History2 from './History2';
import History3 from './History3';
import History4 from './History4';
import History5 from './History5';

class Ancestor extends React.Component {

  randomize(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
}
  render() {
    let arr = [<History1 state={this.props.location.state}/>, <History2 state={this.props.location.state}/>, <History3 state={this.props.location.state}/>, <History4 state={this.props.location.state}/>, <History5 state={this.props.location.state}/>]
    return(
      <div className="ancestor">
        {this.randomize(arr)}
      </div>
    ) 
  }
}

export default Ancestor;