import React from 'react';
import { Link } from 'react-router-dom';

const History1 = (props) => {
  
  return(
    <div className="history">
      <div className="photo-container">
        <img className="photo" src="../img/agapita.jpg" alt="Agapita"/>
      </div>
      <div className="text">
        Esta es la historia de Agapita {props.state.userInfo.surname}, prima lejana de la abuela de {props.state.userInfo.firstName} y superviviente de una epidemia de tuberculosis que asoló su pueblo a principios del siglo XX. <br/><br/>
        A pesar de nacer en {props.state.userInfo.city} allá por 1875, Agapita se mudó a Rascafría de Lozoya con su madre y fue pionera en la fabricación de todo tipo de máquinas, como la que vemos en la foto. Aunque no tenía estudios, siempre sabía qué hacer con unas chapas, un par de tuercas, un tubo, un poquito de pegamento... et voilà! se fabricaba un respirador casero en un momento. <br/><br/>
        A los {props.state.userInfo.age} años, decidió que lo que más le gustaba en el mundo era {props.state.userInfo.love} y dejó de lado su prometedora carrera como inventora para perseguir su sueño. <br/><br/>
        Cuando tenía buen día, se hacía un plato de {props.state.userInfo.food} para celebrar lo hermosa que era la vida (a pesar de la tuberculosis), pero en sus malos ratos la visitaba una nube negra en forma de {props.state.userInfo.phobia}. <br/><br/>
        Tras una relativamente larga y feliz existencia, esta maravillosa mujer de pelo {props.state.userInfo.hair} sufrió una muerte trágica y murió en manos de lo que más odiaba : {props.state.userInfo.hate}.<br/><br/>
        <button type='button' className="chat" > 
          <Link className="link-chat" to={{pathname:'/chat', state:{userInfo: props.state.userInfo}}} title='Chatea con ella'>Chat en directo</Link>
        </button>
      </div>
    </div>
  )
}

export default History1;