import React from 'react';
import { Link } from 'react-router-dom';


const Chat = (props) => {

  lightsOnOff();
  writeText();
  let psicofonia = new Audio();
  psicofonia.src = "./audio/psicofonia.mp3"


  function lightsOnOff () {
    let start = setInterval(lightAndSound, 100);
    setTimeout(function( ) { clearInterval( start ); }, 4000);
  }

  function lightAndSound() {
    let chat = document.querySelector('.chat-container');
    chat.classList.toggle('ghost');
    chat.classList.toggle('scary');
    psicoSound();
  }

  function psicoSound(){
    psicofonia.play();   
 }

  function writeText(){
    setTimeout(changeMessage, 3000);
  }

  function changeMessage() {
    const text = document.querySelector('.message');
    text.innerText = 'No tengas miedo.';
    setTimeout(changeMessage2, 3000);
  }

  function changeMessage2() {
    const text = document.querySelector('.message');
    text.innerText = 'En realidad, esto es como un diálogo interno';
    setTimeout(changeMessage3, 4000);
  }

  function changeMessage3() {
    const text = document.querySelector('.message');
    text.innerText = 'porque somos la misma persona.';
    setTimeout(changeMessage4, 3000);
  }

  function changeMessage4() {
    const text = document.querySelector('.message');
    text.innerText = 'Así que, todo lo que te diga';
    setTimeout(changeMessage5, 3000);
  }

  function changeMessage5() {
    const text = document.querySelector('.message');
    text.innerText = 'ya lo sabes.';
    setTimeout(changeMessage6, 2000);
  }

  function changeMessage6() {
    const text = document.querySelector('.message');
    text.innerText = '¿Cómo te va la vida? Cuéntame.';
    const extra = document.querySelector('.extra');
    const input = document.createElement('input');
    input.classList.add('input');
    extra.appendChild(input);
    setTimeout(function() {
      document.querySelector('.input').style.display='none'
   }, 8000);
    setTimeout(changeMessage7, 8000);
  }

  function changeMessage7() {
    lightsOnOff();
    const text = document.querySelector('.message');
    text.innerText = 'Aquí no hay mucha cobertura';
    setTimeout(changeMessage8, 3000);
  }

  function changeMessage8() {
    const text = document.querySelector('.message');
    text.innerText = 'y tus mensajes no me llegan';
    setTimeout(changeMessage9, 3000);
  }

  function changeMessage9() {
    const text = document.querySelector('.message');
    text.innerText = 'pero todo va a ir bien.';
    setTimeout(changeMessage10, 2000);
  }

  function changeMessage10() {
    const text = document.querySelector('.message');
    text.innerText = 'En realidad, piensa que solo eres un envoltorio.';
    setTimeout(changeMessage11, 4000);
  }

  function changeMessage11() {
    const text = document.querySelector('.message');
    text.innerText = 'Te lo digo como un cumplido.';
    setTimeout(changeMessage12, 3000);
  }
  
  function changeMessage12() {
    lightsOnOff();
    const text = document.querySelector('.message');
    text.innerText = 'Cuando la cosa se tuerza';
    setTimeout(changeMessage13, 3000);
  }
 
  function changeMessage13() {
    const text = document.querySelector('.message');
    text.innerText = `piensa en ${props.location.state.userInfo.love}.`;
    setTimeout(changeMessage14, 3000);
  }

  function changeMessage14() {
    const text = document.querySelector('.message');
    text.innerText = 'Te voy a dar dos consejos.';
    setTimeout(changeMessage15, 3000);
  }

  function changeMessage15() {
    const text = document.querySelector('.message');
    text.innerText = 'No te quites la mascarilla.';
    setTimeout(changeMessage16, 3000);
  }

  function changeMessage16() {
    const text = document.querySelector('.message');
    text.innerText = 'Tienes que durar unos años más.';
    setTimeout(changeMessage17, 3000);
  }
 
  function changeMessage17() {
    lightsOnOff();
    const text = document.querySelector('.message');
    text.innerText = 'Y nunca llames a Jazztel';
    setTimeout(changeMessage18, 3000);
  }

  function changeMessage18() {
    const text = document.querySelector('.message');
    text.innerText = 'para pedir información sobre la tarifa más barata.';
    setTimeout(changeMessage19, 4000);
  }

  function changeMessage19() {
    const text = document.querySelector('.message');
    text.innerText = 'Me tengo que ir.';
    setTimeout(changeMessage20, 2000);
  }

  function changeMessage20() {
    lightsOnOff();
    const text = document.querySelector('.message');
    text.innerText = 'Aquí hace mucho frío.';
    setTimeout(changeMessage21, 2000);
  }

  function changeMessage21() {
    const text = document.querySelector('.message');
    text.innerText = 'Cuídate mucho.';
    setTimeout(changeMessage22, 3000);
  }

  function changeMessage22() {
    const text = document.querySelector('.message');
    text.innerText = 'Si quieres conocer más reencarnaciones';
    setTimeout(changeMessage23, 3000);
  }

  function changeMessage23() {
    const text = document.querySelector('.message');
    text.innerText = 'vuelve al formulario y pide conocer otra de tus vidas.';
    setTimeout(changeMessage24, 4000);
  }

  function changeMessage24() {
    const text = document.querySelector('.message');
    text.innerText = 'Pero yo soy tu mejor versión de ti.';
    setTimeout(changeMessage25, 3000);
  }

  function changeMessage25() {
    const text = document.querySelector('.message');
    text.innerText = 'Choque de codos.';
    setTimeout(changeMessage26, 3000);
  }

  function changeMessage26() {
    const text = document.querySelector('.message');
    text.innerText = 'Adiós';
    setTimeout(changeMessage27, 2000);
  }

  function changeMessage27() {
    const text = document.querySelector('.message');
    text.innerText = '';
  }

    return(
    <div className="chat-container">
      <Link className="link-return2" to='/form' title='Volver'>Volver</Link>
      <div className="ghost-text">
        <p className="message">Hola {props.location.state.userInfo.firstName}</p>
        <div className="extra"></div>
      </div>
    </div>
    )
  }


export default Chat;