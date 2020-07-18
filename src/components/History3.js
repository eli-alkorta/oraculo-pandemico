import React from 'react';
import { Link } from 'react-router-dom';

const History3 = (props) => {
  
  return(
    <div className="history3">
      <div className="photo-container3">
        <Link className="link-return3" to='/form' title='Volver'>Volver</Link>
        <img className="photo3" src="../img/fulgencio.jpg" alt="Fulgencio"/>
      </div>
      <div className="text3">
        Este señor se llama Fulgencio {props.state.userInfo.surname} y es primo tercero de tu abuelo. Esta foto, tomada en 1919, demuestra que Fulgencio sobrevivió al primer brote de gripe porcina, o virus influenza AH1N1, uno de los descendientes de la temible gripe española. <br/><br/>
        Este documento demuestra que tú, {props.state.userInfo.firstName}, siempre has sido de buena familia y has tenido buen porte. Fulgencio nació en un barco velero, de ahí su bronceado y sus ojoz azul oceánico, pero a los 24 años se casó y se mudó a {props.state.userInfo.city}. Aunque de joven tuvo un pelo {props.state.userInfo.hair} muy hermoso, cuando tenía {props.state.userInfo.age} quedó calvo y abrió una sombrerería. <br/><br/>
        En realidad él siempre tuvo otro sueño : ser cocinero y especializarse en {props.state.userInfo.food}, pero la calvicie se cruzó en su camino. De tan frustrado que estuvo, llegó a perder la alegría de vivir, y ni {props.state.userInfo.love} le animaba. <br/><br/>
        Este hombre tuvo una vida trágica, no te voy a engañar. Se volvió maniático, se molestaba por cosas insignificantes como {props.state.userInfo.hate}.<br/><br/>
        Finalmente, una fría mañana de diciembre despertó y se topó con {props.state.userInfo.phobia}. El susto fue tan grande, que se tuvo que quitar la mascarilla para poder respirar y se contagió de inmediato. Fue la primera víctima de gripe porcina en {props.state.userInfo.city}.<br/><br/>
        <button type='button' className="chat3" > 
          <Link className="link-chat" to={{pathname:'/chat', state:{userInfo: props.state.userInfo}}} title='Chatea con él'>Chat en directo</Link>
        </button>
      </div>
    </div>
  )
}

export default History3;