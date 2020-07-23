import React from 'react';
import { Link } from 'react-router-dom';
import Eladia from '../img/eladia.jpg';

const History2 = (props) => {
  
  return(
    <div className="history">
      <div className="photo-container">
        <Link className="link-return" to='/form' title='Volver'>Volver</Link>
        <img className="photo" src={Eladia} alt="Eladia"/>
      </div>
      <div className="text">
        Te llamas Eladia. Tú y tus amigas os protegéis de la gripe rusa, pandemia que, entre 1889 y 1894, causó un millón de muertes en todo el planeta. Eres la primera de la foto, empezando por la izquierda.<br/><br/>
        Está feo decirlo, pero a ti, a Eustaquia y a María Eusebia os gustaba mucho disfrazaros de mujeres del saco y la pandemia os vino fenomenal en ese sentido. No teníais que arreglaros, os dejasteis crecer el bigote y la larga melena de pelo {props.state.userInfo.hair} y podíais comer {props.state.userInfo.food} hasta reventar, porque la sábana tapaba vuestros kilos de manteca.<br/><br/>
        A los {props.state.userInfo.age} años, decidiste abandonar el pueblo extremeño donde habías nacido y mudarte a {props.state.userInfo.city}. Separarte de tus amigas fue duro, pero estabas llena de ambición, y pronto abriste una churrería en la calle más céntrica de la localidad.<br/><br/>
        El éxito económico no se hizo esperar, pero la capucha te daba tanto calor que te provocaba alucionaciones y veías {props.state.userInfo.phobia} cada vez que freías una docena de churros.<br/><br/>
        Tu salud se resentía y tuviste que renunciar a tu negocio, porque la vida te sabía a {props.state.userInfo.hate} y no conseguías animarte ni con {props.state.userInfo.love}.<br/><br/>
        Pero la vida te deparaba sorpresas. Conociste a un pirata de los mares (por aquel entonces no había informáticos) y pasaste las últimas décadas de tu vida asaltando embarcaciones en el canal de la Mancha.<br/><br/>
        {props.state.userInfo.firstName} {props.state.userInfo.surname}, seguro que ahora entiendes muchas cosas de tu vida que eran un misterio para ti. ¿Quieres hablar con tu reencarnación?<br/><br/>
        <button type='button' className="chat" > 
          <Link className="link-chat" to={{pathname:'/chat', state:{userInfo: props.state.userInfo}}} title='Chatea con ella'>Chatea con tu alma transmigrada</Link>
        </button>
      </div>
    </div>
  )
}

export default History2;