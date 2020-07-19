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
        Te llamabas Merceditas y eras una mujer elegante, con clase y podería. Mira qué abrigo de visón llevabas todos los domingos a misa. Desgraciadamente, el dinero no transmigra y a ti, {props.state.userInfo.firstName}, nunca te ha llegado una peseta de Merceditas.<br/><br/>
        Eras una mujer orgullosa que se creía omnipotente. Fíjate si no en cómo llevabas la mascarilla, con la nariz fuera, y los guantes sin poner. Menos mal que en aquella época no se ponían multas. Como eras de buena familia creías que la gripe española no iba a poder contigo... y acertaste. Una gripe que en 1918, en un solo año, mató entre 20 y 40 millones de personas no pudo acabar contigo. Alégrate por los genes que puedes haber heredado y por ese pelo lustroso y {props.state.userInfo.hair} que te ha dejado Merceditas.<br/><br/>
        En la foto saludas a tu amiga Gertrudis, que vuelve del mercado de comprar {props.state.userInfo.food}. La miras con tirria porque siempre te deja sin {props.state.userInfo.food}, que es tu comida favorita. Por ello, piensas en el mal de ojo que le vas a echar luego en tu casa, en la invocación de {props.state.userInfo.phobia} que vas a realizar con tu bola mágica de bruja-pitonisa.<br/><br/>
        Y es que, a los {props.state.userInfo.age} años, descubriste que tenías poderes y que podías conseguir {props.state.userInfo.love} en gran cantidad y sin esfuerzo, y evitar desgracias como {props.state.userInfo.hate}.<br/><br/>
        Falleciste a los 99 años en {props.state.userInfo.city}, un poco triste porque nunca encontraste el elixir de la vida eterna que andabas buscando.<br/><br/>
        {props.state.userInfo.firstName} {props.state.userInfo.surname}, seguro que ahora entiendes muchas cosas de tu vida que eran un misterio para ti. ¿Quieres hablar con tu reencarnación?<br/><br/>
        <button type='button' className="chat" > 
          <Link className="link-chat" to={{pathname:'/chat', state:{userInfo: props.state.userInfo}}} title='Chatea con ella'>Chatea con tu alma transmigrada</Link>
        </button>
      </div>
    </div>
  )
}

export default History4;