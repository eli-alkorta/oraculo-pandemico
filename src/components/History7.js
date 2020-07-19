import React from 'react';
import { Link } from 'react-router-dom';

const History7 = (props) => {
  
  return(
    <div className="history3">
      <div className="photo-container3">
        <Link className="link-return3" to='/form' title='Volver'>Volver</Link>
        <img className="photo3" src="../img/rigoberta.jpeg" alt="Rigoberta y Filemona"/>
        <img className="photo5" src="../img/rigoberta2.jpg" alt="Relajadas en el campo"/>
      </div>
      <div className="text3">
        Te llamabas Rigoberta y pertenecías a una conocida familia de la alta burguesía mexicana, emigrada a {props.state.userInfo.city} a principios del siglo XX. No empezaste tu nueva vida con buen pie, porque al poco de llegar, te topaste con una pandemia bastante letal: la gripe española de 1918, que causó nada menos que 100 millones de víctimas.<br/><br/>
        Pero a ti nada te hacía perder el estilo. Te echaste una amiga íntima (tú eres la alta y ella la bajita, que se llama Filemona y mira a la cámara con chulería) y viajabas con ella de casino en casino. Cuando ganabas, invitabas a Filemona a {props.state.userInfo.food}, pero cuando perdías todo lo que tenías, te dabas a la bebida y soñabas con {props.state.userInfo.phobia}.<br/><br/>
        Quisiste quitarte del vicio del juego y el alcohol, pero en aquella época no existía Proyecto Hombre ni nada parecido. Cuando ganabas a la ruleta, la vida era maravillosa y tan bonita como {props.state.userInfo.love}, pero las bajonas cada vez eran peores y ya no remontabas... tu existencia era tan horrorosa como {props.state.userInfo.hate}.<br/><br/>
        A los {props.state.userInfo.age} años, perdiste todo tu dinero en el casino de Montecarlo y Filemona te dio un ultimátum : como no dejes el vicio te arranco el poco pelo {props.state.userInfo.hair} que te queda y te abandono.<br/><br/> 
        Y el amor todo lo pudo porque, arruinadas pero contentas, os mudasteis al campo. Aunque perdisteis una pizca de elegancia, salisteis vivas de la pandemia y vivisteis felices el resto de vuestros días.<br/><br/>
        {props.state.userInfo.firstName} {props.state.userInfo.surname}, seguro que ahora entiendes muchas cosas de tu vida que eran un misterio para ti. ¿Quieres hablar con tu reencarnación?<br/><br/>
        <button type='button' className="chat3" > 
          <Link className="link-chat" to={{pathname:'/chat', state:{userInfo: props.state.userInfo}}} title='Chatea con él'>Chatea con tu alma transmigrada</Link>
        </button>
      </div>
    </div>
  )
}

export default History7;