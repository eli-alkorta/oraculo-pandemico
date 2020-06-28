import React from 'react';

class Ancestor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="ancestor">
      <h1>Hola desde ancestor</h1>
    </div>
    )}
}

export default Ancestor;