import React from 'react';
import { Link } from 'react-router-dom';

const History5 = (props) => {
  
  return(
    <div className="history">
      <div className="photo-container">
        <Link className="link-return" to='/form' title='Volver'>Volver</Link>
        <img className="photo" src="../img/leocadio.jpg" alt="Leocadio"/>
      </div>
      <div className="text">
        La persona que esta bajo esa escafandra se llama Leocadio {props.state.userInfo.surname} y es tu tataratataratío. Trata de luchar contra la quinta pandemia de cólera, que se extendió por el mundo a finales del siglo XIX y mató a más de 60.000 personas en España.<br/><br/>
        Leocadio era un inventor brillante e ideó el 'isolator', un aparato conectado a una botella de oxígeno que le permitía seguir estudiando y creando sin arriesgarse al contagio. Pero tu tataratataratío, {props.state.userInfo.firstName}, era tonto de lo bueno que era. Se pasaba el día pensando en lo que le gustaba {props.state.userInfo.love} en lugar de esmerarse con el networking. Y un americano espabilado le robó la patente del 'isolator' y le dejó en la ruina.<br/><br/>
        Ni comer {props.state.userInfo.food} le quitaba el disgusto que tenía. Debido al fracaso laboral y vital, tuvo que mudarse de Londres a {props.state.userInfo.city} y, con {props.state.userInfo.age} años recién cumplidos, reinventarse y empezar de cero.<br/><br/>
        Se quedó sin el poco pelo {props.state.userInfo.hair} que tenía y se sentía vacío sin su 'isolator'. Por las noches soñaba con {props.state.userInfo.phobia} y su vida era una sucesión de disgustos. Todo le sentaba tan mal como {props.state.userInfo.hate}.<br/><br/>
        Pero esta no es una historia de final trágico. Tratando de emular su famoso invento, Leocadio fabricó novedosos prototipos que ponía a prueba bajo el agua. Así inventó la escafandra. Y esta vez no se le olvidó patentarla.<br/><br/>
        <button type='button' className="chat" > 
          <Link className="link-chat" to={{pathname:'/chat', state:{userInfo: props.state.userInfo}}} title='Chatea con ella'>Chat en directo</Link>
        </button>
      </div>
    </div>
  )
}

export default History5;