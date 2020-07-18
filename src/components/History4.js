import React from 'react';
import { Link } from 'react-router-dom';

const History4 = (props) => {
  
  return(
    <div className="history">
      <div className="photo-container">
        <Link className="link-return" to='/form' title='Volver'>Volver</Link>
        <img className="photo" src="../img/merceditas.jpg" alt="Merceditas"/>
      </div>
      <div className="text">
        Merceditas {props.state.userInfo.surname} era una mujer elegante, con clase y podería. Mira qué abrigo de visón llevaba tu tía bisabuela los domingos para ir a misa. Desgraciadamente, la herencia fue a parar a otra rama de la familia y tú, {props.state.userInfo.firstName}, nunca viste una peseta de Merceditas.<br/><br/>
        Tu tía bisabuela era también una mujer orgullosa que se creía omnipotente. Fíjate si no en cómo llevaba la mascarilla, con la nariz fuera, y los guantes sin poner. Como era de buena familia creía que la gripe española no iba a poder con ella... y acertó. Una gripe que en 1918, en un solo año, mató entre 20 y 40 millones de personas no pudo acabar con Merceditas. Alegrémonos por los genes que has heredado y por ese pelo lustroso y {props.state.userInfo.hair} que te ha dejado.<br/><br/>
        En la foto saluda a su amiga Gertrudis, que vuelve del mercado de comprar {props.state.userInfo.food}. Merceditas la mira con tirria porque siempre le deja sin {props.state.userInfo.food}, que es su comida favorita. Por ello piensa en el mal de ojo que le va a echar luego en su casa, en la invocación de {props.state.userInfo.phobia} que va a realizar con su bola mágica de bruja-pitonisa.<br/><br/>
        Y es que, a los {props.state.userInfo.age} años, Merceditas descubrió que tenía poderes y que podía conseguir {props.state.userInfo.love} en gran cantidad y sin esfuerzo, y evitar desgracias como {props.state.userInfo.hate}.<br/><br/>
        Murió a los 99 años en {props.state.userInfo.city}, un poco triste porque nunca encontró el elixir de la vida eterna que andaba buscando.<br/><br/>
        <button type='button' className="chat" > 
          <Link className="link-chat" to={{pathname:'/chat', state:{userInfo: props.state.userInfo}}} title='Chatea con ella'>Chat en directo</Link>
        </button>
      </div>
    </div>
  )
}

export default History4;