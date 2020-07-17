import React from 'react';

const Chat = (props) => {
  
  return(
    <div>Hola desde chat {props.location.state.userInfo.surname}</div>
  )
}

export default Chat;