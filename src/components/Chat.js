import React from 'react';
import { Link } from 'react-router-dom';


const Chat = (props) => {

  lightsOnOff();
  writeText();


  function lightsOnOff () {
    let start = setInterval(lightAndSound, 100);
    setTimeout(function( ) { clearInterval( start ); }, 4000);
  }

  function lightAndSound() {
    let chat = document.querySelector('.chat-container');
    chat.classList.toggle('ghost');
    chat.classList.toggle('scary');
  }

  function writeText(){
    setInterval(changeMessage, 2000);
  }

  function changeMessage() {
    const text = document.querySelector('.message');
    text.innerText = 'No tengas miedo';
    setInterval(changeMessage2, 2000);
  }

  function changeMessage2() {
    const text = document.querySelector('.message');
    text.innerText = 'En realidad, esto es como un diálogo interno';
    setInterval(changeMessage3, 2000);
  }

  function changeMessage3() {
    const text = document.querySelector('.message');
    text.innerText = 'porque somos la misma persona.';
    setInterval(changeMessage4, 2000);
  }

  function changeMessage4() {
    const text = document.querySelector('.message');
    text.innerText = 'Así que, todo lo que te diga';
    setInterval(changeMessage5, 2000);
  }

  function changeMessage5() {
    const text = document.querySelector('.message');
    text.innerText = 'ya lo sabes.';
    setInterval(changeMessage6, 2000);
  }

  function changeMessage6() {
    const text = document.querySelector('.message');
    text.innerText = 'Todo va a ir bien.';
    setInterval(changeMessage7, 2000);
  }
  
  function changeMessage7() {
    const text = document.querySelector('.message');
    text.innerText = 'Cuando la cosa se tuerce';
    setInterval(changeMessage8, 2000);
  }
 
  function changeMessage8() {
    const text = document.querySelector('.message');
    text.innerText = `piensa en ${props.location.state.userInfo.love}`;
    setInterval(changeMessage9, 2000);
  }

  function changeMessage9() {
    const text = document.querySelector('.message');
    text.innerText = 'Te voy a dar un consejo';
    setInterval(changeMessage10, 2000);
  }

  function changeMessage10() {
    const text = document.querySelector('.message');
    text.innerText = 'No tienes mal físico';
    setInterval(changeMessage11, 2000);
  }

  function changeMessage11() {
    const text = document.querySelector('.message');
    text.innerText = 'Hueles bastante bien';
    setInterval(changeMessage12, 2000);
  }

  function changeMessage12() {
    const text = document.querySelector('.message');
    text.innerText = '';
  }

    return(
    <div className="chat-container">
      <Link className="link-return2" to='/form' title='Volver'>Volver</Link>
      <div className="ghost-text">
        <p className="message">Hola {props.location.state.userInfo.firstName}</p>
        <input className="hidden"></input>
      </div>
    </div>
    )
  }


export default Chat;