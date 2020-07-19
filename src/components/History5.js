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
        La persona que está bajo esa bombona se llama Leocadio y es una de tus reencarnaciones más interesantes. Trata de luchar contra la quinta pandemia de cólera, que se extendió por el mundo a finales del siglo XIX y mató a más de 60.000 personas en España.<br/><br/>
        En esta vida fuiste un inventor brillante e ideaste aparatos como el 'isolator', una máquina conectada a una botella de oxígeno que te permitía seguir estudiando y creando sin arriesgarte al contagio. A pesar de tu brillantez intelectual, eras tonto de lo bueno que eras. Pasabas el día pensando en lo que le gustaba {props.state.userInfo.love} en lugar de esforzarte con el networking, que hasta los antiguos sabían que era necesario para prosperar. Y un americano espabilado te robó la patente del 'isolator' y te dejó en la ruina.<br/><br/>
        Ni comer {props.state.userInfo.food} te quitaba el disgusto que tenías. Debido al fracaso laboral y vital, tuviste que mudarte de Nueva York a {props.state.userInfo.city} y, con {props.state.userInfo.age} años recién cumplidos, reinventarte y empezar de cero.<br/><br/>
        Además, te quedaste sin el poco pelo {props.state.userInfo.hair} que tenías y te sentías vacío sin tu 'isolator'. Por las noches soñabas con {props.state.userInfo.phobia} y tu vida era una sucesión de disgustos. Todo te sentaba tan mal como {props.state.userInfo.hate}.<br/><br/>
        Pero esta no es una historia de final trágico. Tratando de emular tu famoso invento robado, fabricaste novedosos prototipos que ponías a prueba bajo el agua. Así inventaste la escafandra. Y esta vez no se te olvidó patentarla. Triunfaste muchísimo en tu pueblo y a nivel internacional.<br/><br/>
        {props.state.userInfo.firstName} {props.state.userInfo.surname}, seguro que ahora entiendes muchas cosas de tu vida que eran un misterio para ti. ¿Quieres hablar con tu reencarnación?<br/><br/>
        <button type='button' className="chat" > 
          <Link className="link-chat" to={{pathname:'/chat', state:{userInfo: props.state.userInfo}}} title='Chatea con él'>Chatea con tu alma transmigrada</Link>
        </button>
      </div>
    </div>
  )
}

export default History5;