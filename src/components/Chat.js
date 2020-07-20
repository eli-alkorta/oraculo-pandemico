import React from 'react';

// componentDidMount() {
//   this.lightsOnOff();
// }

const Chat = (props) => {

  lightsOnOff();
  let click = new Audio();
  click.src = "./audio/click-audio.mp3";

  function lightsOnOff () {
    setInterval(lightAndSound, 2300);
  }

  function lightAndSound() {
    let chat = document.querySelector('.chat-container');
    chat.classList.toggle('ghost');
    chat.classList.toggle('scary');
    createClick()
  }

  function createClick(){
    click.play();    
 }

    return(
    <div className="chat-container">Hola desde chat {props.location.state.userInfo.surname}</div>
    )
  }


export default Chat;