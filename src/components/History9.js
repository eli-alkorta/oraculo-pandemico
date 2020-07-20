import React from 'react';
import { Link } from 'react-router-dom';

const History9 = (props) => {
  
  return(
    <div className="history">
      <div className="photo-container">
        <Link className="link-return" to='/form' title='Volver'>Volver</Link>
        <img className="photo" src="../img/paco.jpg" alt="Paco y su esposa Angelita"/>
      </div>
      <div className="text">
        Tu nombre era Paco y así te protegías de la viruela en la Inglaterra de los años 20. Esta tremenbunda enfermedad mató a 300 millones de personas solo en el siglo XX, pero a ti no te pilló. Y a tu esposa Angelita tampoco <br/><br/>
        Erais gente con clase. De jóvenes, en {props.state.userInfo.city}, ya destacabais por vuestra elegancia. Así que, a los {props.state.userInfo.age} años, emigrasteis a Londres y abristeis una tienda de chaquetones en Bond Street.<br/><br/>
        Tu mayor preocupación era no perder el estilo por culpa de una sucia enfermedad que obligaba a la gente a convertirse en adefesios. ¿Por qué tenían que ponerse esas ridículas mascarillas blancas que parecían baberos? Esto te provocaba una indignación semejante a la que sentías por {props.state.userInfo.hate}, así que invertiste todos tus ahorros en diseñar y fabricar una mascarilla de piel de nutria, como la que se puede ver en la foto.<br/><br/>
        La primera acogida de tu producto entre la élite londinense fue muy positiva. La vida te sonreía, todas las tardes encontrabas un momento para disfrutar de lo que más te gustaba en el mundo, {props.state.userInfo.love}, y todos los domingos invitabas a tus amigos a tu chalet a comer tu plato favorito : {props.state.userInfo.food}. <br/><br/>
        Pero la vida es perra y pronto surgieron problemas: la piel de nutria era impermeable, muy conveniente para no mojarse el hocico con los chaparrones londinenses, pero los grupos ecologistas consideraron inmoral la matanza de nutrias. Tampoco era un diseño muy práctico para la gente a la que le gustaba hablar. En cuanto abrías la boca, quedabas expuesto y te comías todos los virus. No te quiero aburrir con todas las pegas que tenía el invento. <br/><br/>
        Aquello fue devastador para el negocio y para la autoestima. Te quedaste sin el hermoso pelazo {props.state.userInfo.hair} que tenías y desarrollaste toda una serie de miedos, como la fobia a {props.state.userInfo.phobia}. Angelita te obligó a retirarte prematuramente, os comprasteis un barco y vivisteis en Regent's Canal el resto de vuestros días.<br/><br/>
        {props.state.userInfo.firstName} {props.state.userInfo.surname}, seguro que ahora entiendes muchas cosas de tu vida que eran un misterio para ti. ¿Quieres hablar con tu reencarnación?<br/><br/>
        <button type='button' className="chat" > 
          <Link className="link-chat" to={{pathname:'/chat', state:{userInfo: props.state.userInfo}}} title='Chatea con él'>Chatea con tu alma transmigrada</Link>
        </button>
      </div>
    </div>
  )
}

export default History9;