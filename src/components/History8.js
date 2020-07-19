import React from 'react';
import { Link } from 'react-router-dom';

const History8 = (props) => {
  
  return(
    <div className="history">
      <div className="photo-container">
        <Link className="link-return" to='/form' title='Volver'>Volver</Link>
        <img className="photo" src="../img/josefi.jpg" alt="Josefi"/>
      </div>
      <div className="text">
        ¿Alguna vez te has preguntado por qué te pasas el día toquiteando el teléfono? Pues porque en otra vida fuiste operadora telefónica. Como las de Jazztel pero en antiguo. Te llamabas Josefi y tenías un peinado muy moderno para la época, precursor del tupé Rock n' Roll.<br/><br/>
        Tuviste una juventud complicada. Porque nada más empezar de telefonista, se desató la gripe española de 1918 y te obligaron a llevar una mascarilla que hacía que nadie te entendiera cuando le llamabas. Y es que en aquella época no había buena cobertura, pero sí existía el marketing telefónico, y todo el mundo te colgaba de inmediato porque no querían otro colchón de paja ni más jabón Lagarto.<br/><br/>
        A los {props.state.userInfo.age} años, llena de frustración, lo dejaste todo y te mudaste a {props.state.userInfo.city}, donde cambiarías por vigesimosexta vez de peinado : tu nuevo pelo sería largo, pelirrojo y {props.state.userInfo.hair}. Descubriste que lo tuyo era la moda y decidiste dejar de usar mascarilla porque, según tu opinión, era incompatible con la belleza.<br/><br/>
        Huelga decir que aquello fue un grandísimo error y que terminaste en un hospital de infecciosos, donde tenías pesadillas con {props.state.userInfo.hate} y {props.state.userInfo.phobia}. Gracias a la fe cristiana y a la comida de las enfermeras, que te traían {props.state.userInfo.food} con todo el cariño, saliste adelante y recuperaste la alegría de vivir.<br/><br/>
        En los años 20 te metiste a monja de clausura y tuviste una existencia larga y plácida, llena de felicidad y de {props.state.userInfo.love}.<br/><br/>
        {props.state.userInfo.firstName} {props.state.userInfo.surname}, seguro que ahora entiendes muchas cosas de tu vida que eran un misterio para ti. ¿Quieres hablar con tu reencarnación?<br/><br/>
        <button type='button' className="chat" > 
          <Link className="link-chat" to={{pathname:'/chat', state:{userInfo: props.state.userInfo}}} title='Chatea con ella'>Chatea con tu alma transmigrada</Link>
        </button>
      </div>
    </div>
  )
}

export default History8;