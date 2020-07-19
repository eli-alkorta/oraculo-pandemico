import React from 'react';
import { Link } from 'react-router-dom';

const History6 = (props) => {
  
  return(
    <div className="history3">
      <div className="photo-container3">
        <Link className="link-return3" to='/form' title='Volver'>Volver</Link>
        <img className="photo3" src="../img/horacio.jpg" alt="Horacio"/>
        <img className="photo4" src="../img/horacio2.jpg" alt="Horacio en su época salvaje"/>
      </div>
      <div className="text3">
        Sin duda una de tus vidas pasadas más exóticas: te llamas Horacio y eres barrendero en el lejano y salvaje Oeste, en la segunda mitad del siglo XIX. Te proteges de una epidemia de tifus, propagada por las pulgas de los roedores. De ahí que tu trabajo fuera vital para mantener a las ratas lejos de la población de tu ciudad, Memphis. <br/><br/>
        Aunque tu familia era originaria de {props.state.userInfo.city}, a ti te encantaban las historias de indios y vaqueros desde niño, por lo que embarcaste en un velero, a los {props.state.userInfo.age} años, rumbo a las Américas.<br/><br/>
        A ti te caían mejor los indios, desde siempre, pero nunca viste ninguno. Así que te compraste una escoba y un cubo de basura y te sentiste engañado por la ficción y nostálgico de tu tierra. Ya nunca más comerías {props.state.userInfo.food} ni podrías exhibir ese pelazo {props.state.userInfo.hair} que te obligaban a esconder debajo de un ridículo sombrero.<br/><br/>
        Menos mal que no todo en la vida estaba perdido y que siempre te quedaría la alegría de {props.state.userInfo.love} y la esperanza de conocer a algún Cherokee que te aceptara en su comunidad. Ese momento se hizo esperar y llegó en la vejez : un sueño de {props.state.userInfo.phobia} te enseñó el camino a la aldea india más próxima.<br/><br/>
        Tras días y semanas caminando en el desierto, acosado por el horror de {props.state.userInfo.hate}, llegaste a la comunidad Cherokee, donde fuiste aceptado y practicaste el chamanismo hasta tu muerte.<br/><br/>
        {props.state.userInfo.firstName} {props.state.userInfo.surname}, seguro que ahora entiendes muchas cosas de tu vida que eran un misterio para ti. Por ejemplo, por qué te gusta tanto eliminar el polvo y quitar pelusas. ¿Quieres hablar con tu reencarnación?<br/><br/>
        <button type='button' className="chat3" > 
          <Link className="link-chat" to={{pathname:'/chat', state:{userInfo: props.state.userInfo}}} title='Chatea con él'>Chatea con tu alma transmigrada</Link>
        </button>
      </div>
    </div>
  )
}

export default History6;