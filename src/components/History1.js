import React from 'react';
import { Link } from 'react-router-dom';
import Agapita from '../img/agapita.jpg';

const History1 = (props) => {
  
  return(
    <div className="history">
      <div className="photo-container">
        <Link className="link-return" to='/form' title='Volver'>Volver</Link>
        <img className="photo" src={Agapita} alt="probando"/>
      </div>
      <div className="text">
        Tu nombre era Agapita y sobreviviste a una epidemia de tuberculosis que asoló tu pueblo a principios del siglo XX. <br/><br/>
        A pesar de nacer en {props.state.userInfo.city} allá por 1875, te mudaste a Rascafría de Lozoya con tu madre y fuiste pionera en la fabricación de todo tipo de máquinas, como la que vemos en la foto. Aunque no tenías estudios, siempre sabías qué hacer con unas chapas, un par de tuercas, un tubo, un poquito de pegamento... et voilà! te fabricabas un respirador casero en un momento. <br/><br/>
        A los {props.state.userInfo.age} años, decidiste que lo que más te gustaba en el mundo era {props.state.userInfo.love} y dejaste de lado tu prometedora carrera como inventora para perseguir tu sueño. <br/><br/>
        Cuando tenías buen día, te preparabas un buen plato de {props.state.userInfo.food} para celebrar lo hermosa que era la vida (a pesar de la tuberculosis), pero en tus malos ratos te visitaba una nube negra en forma de {props.state.userInfo.phobia}.<br/><br/>
        Tras una relativamente larga y feliz existencia, Agapita, maravillosa mujer de pelo {props.state.userInfo.hair}, sufrió una muerte trágica y murió en manos de lo que más odiaba : {props.state.userInfo.hate}.<br/><br/>
        {props.state.userInfo.firstName} {props.state.userInfo.surname}, seguro que ahora entiendes muchas cosas de tu vida que eran un misterio para ti. ¿Quieres hablar con tu reencarnación?<br/><br/>
        <button type='button' className="chat" > 
          <Link className="link-chat" to={{pathname:'/chat', state:{userInfo: props.state.userInfo}}} title='Chatea con ella'>Chatea con tu alma transmigrada</Link>
        </button>
      </div>
    </div>
  )
}

export default History1;