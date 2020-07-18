import React from 'react';
import { Link } from 'react-router-dom';

const History2 = (props) => {
  
  return(
    <div>Esta es la historia de Joselito {props.state.userInfo.surname}</div>
  )
}

export default History2;