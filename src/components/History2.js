import React from 'react';
import { Link } from 'react-router-dom';

const History2 = (props) => {
  
  return(
    <div className="history">
      <div className="photo-container">
        <Link className="link-return" to='/form' title='Volver'>Volver</Link>
        <img className="photo" src="../img/eladia.jpg" alt="Eladia"/>
      </div>
      <div className="text">
        Eladia {props.state.userInfo.surname} y sus amigas se protegen de la gripe rusa, pandemia que, entre 1889 y 1894, causó un millón de muertes en todo el planeta. Eladia es la sobrina segunda de tu bisabuelo, la primera de la foto empezando por la izquierda.<br/><br/>
        Está feo decirlo, pero a Eladia, Eustaquia y María Eusebia les gustaba mucho disfrazarse de mujeres del saco y la pandemia les vino fenomenal en ese sentido. No tenían que arreglarse, se dejaron crecer el bigote y la larga melena de pelo {props.state.userInfo.hair} y podían comer {props.state.userInfo.food} hasta reventar.<br/><br/>
        A los {props.state.userInfo.age} años, Eladia decidió abandonar el pueblo extremeño donde había nacido y mudarse a {props.state.userInfo.city}. Separarse de sus amigas fue duro, pero estaba llena de ambición, y pronto abrió una churrería en la calle más céntrica de la localidad.<br/><br/>
        El éxito económico no se hizo esperar, pero la capucha le daba tanto calor que le provocaba alucionaciones y veía {props.state.userInfo.phobia} cada vez que freía una docena de churros.<br/><br/>
        Eladia tuvo que renunciar a su negocio, porque la vida le sabía a {props.state.userInfo.hate} y no conseguía animarse ni con {props.state.userInfo.love}.<br/><br/>
        Conoció a un pirata, con quien tuvo una criatura muy bella llamada {props.state.userInfo.firstName}, y pasó las últimas décadas de su vida asaltando embarcaciones en el canal de la Mancha.<br/><br/>
        <button type='button' className="chat" > 
          <Link className="link-chat" to={{pathname:'/chat', state:{userInfo: props.state.userInfo}}} title='Chatea con ella'>Chat en directo</Link>
        </button>
      </div>
    </div>
  )
}

export default History2;