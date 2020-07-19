import React from 'react';
import { Link } from 'react-router-dom';

const History3 = (props) => {
  
  return(
    <div className="history3">
      <div className="photo-container3">
        <Link className="link-return3" to='/form' title='Volver'>Volver</Link>
        <img className="photo3" src="../img/fulgencio.jpg" alt="Fulgencio"/>
        <img className="photo4" src="../img/fulgencio2.jpg" alt="Fulgencio y su familia"/>
      </div>
      <div className="text3">
        Te llamas Fulgencio y eres un señor elegante. Esta foto demuestra que sobreviviste al primer brote de gripe porcina, o virus influenza AH1N1, uno de los descendientes de la temible gripe española de 1918. <br/><br/>
        Esta es una prueba más de tu innegable estilo, de que siempre has sido de buena familia y has tenido buen porte. Naciste en un barco velero, de ahí tu bronceado y tus ojoz azul oceánico, pero a los 24 años te casaste y te mudaste a {props.state.userInfo.city}. Aunque de joven tuviste un pelo {props.state.userInfo.hair} muy hermoso, cuando tenías {props.state.userInfo.age} te quedaste completamente calvo y abriste una fábrica de sombreros. El de la foto es un ejemplar de la colección primavera-verano 1919. <br/><br/>
        En realidad siempre tuviste otro sueño : ser cocinero y especializarte en {props.state.userInfo.food}, pero la calvicie trastocó tus planes. De tan frustrado que estuviste, llegaste a perder la alegría de vivir, y ni {props.state.userInfo.love} te animaba. <br/><br/>
        Tuviste una vida trágica, no te voy a engañar. Te volviste maniático, te molestabas por cosas insignificantes como {props.state.userInfo.hate}.<br/><br/>
        Finalmente, una fría mañana de diciembre despertaste y te topaste con {props.state.userInfo.phobia}. El susto fue tan grande, que te tuviste que quitar la mascarilla para poder respirar y te contagiaste de inmediato. Fuiste la primera víctima de gripe porcina en {props.state.userInfo.city}.<br/><br/>
        {props.state.userInfo.firstName} {props.state.userInfo.surname}, seguro que ahora entiendes muchas cosas de tu vida que eran un misterio para ti. ¿Quieres hablar con tu reencarnación?<br/><br/>
        <button type='button' className="chat3" > 
          <Link className="link-chat" to={{pathname:'/chat', state:{userInfo: props.state.userInfo}}} title='Chatea con él'>Chatea con tu alma transmigrada</Link>
        </button>
      </div>
    </div>
  )
}

export default History3;