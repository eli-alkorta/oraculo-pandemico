import React from 'react';
import FormInput from './FormInput';
import { Link } from 'react-router-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        firstName: "",
        surname: "",
        age: "",
        city: "",
        hate: "",
        love: "",
        food: "",
        phobia: "",
        hair: ""
      },
      isValidated: false,
  }
  this.handleInputValue = this.handleInputValue.bind(this);
}

  componentDidUpdate() {
  localStorage.setItem("data", JSON.stringify(this.state.userInfo));
}

  componentDidMount() {
    const localData = JSON.parse(localStorage.getItem("data"));
      if (localData !== null) {
        this.setState((prevState) => {
          return {
            userInfo: {
              ...prevState.userInfo,
              "firstName": localData.firstName,
              "surname": localData.surname,
              "age": localData.age,
              "city": localData.city,
              "hate": localData.hate,
              "love": localData.love,
              "food": localData.food,
              "phobia": localData.phobia,
              "hair": localData.hair
            },
          };
        });
      }
    }

  handleInputValue(inputName, inputValue) {
    this.setState((prevState) => {
      return {
        userInfo: {
          ...prevState.userInfo,
          [inputName]: inputValue,
        },
      };
    },() => this.validateForm());
  }

  validateForm(){
    const { firstName, surname, age, city, hate, love, food, phobia ,hair } = this.state.userInfo;
    const isValidatedValue = (firstName.length > 0) && (surname.length > 0) && (age.length > 0) && (city.length > 0) && (hate.length > 0) && (love.length > 0) && (food.length > 0) && (phobia.length > 0) && (hair.length > 0);
    this.setState({isValidated:isValidatedValue})
  }


  render(props) {
    return (
    <div className="form">
      <form id="formContainer">
        <h2 className="form-title">Necesitamos saber algunas cosas de ti ...</h2>
          <FormInput
              id="name-input"
              labelName="Nombre"
              className="name-input"
              type="text"
              name="firstName"
              value={this.state.userInfo.firstName}
              handleInputValue={this.handleInputValue}
          />
          <FormInput
              id="surname-input"
              labelName="Apellido"
              className="surname-input"
              type="text"
              name="surname"
              value={this.state.userInfo.surname}
              handleInputValue={this.handleInputValue}
          />
          <FormInput
              id="age-input"
              labelName="Edad"
              className="age-input"
              type="number"
              name="age"
              value={this.state.userInfo.age}
              handleInputValue={this.handleInputValue}
          />
          <FormInput
              id="city-input"
              labelName="Lugar de residencia"
              className="city-input"
              type="text"
              name="city"
              value={this.state.userInfo.city}
              handleInputValue={this.handleInputValue}
          />
          <FormInput
              id="hate-input"
              labelName="Lo que más odias en este mundo"
              className="hate-input"
              type="text"
              name="hate"
              value={this.state.userInfo.hate}
              handleInputValue={this.handleInputValue}
          />
          <FormInput
              id="love-input"
              labelName="Lo que más te gusta de la vida"
              className="love-input"
              type="text"
              name="love"
              value={this.state.userInfo.love}
              handleInputValue={this.handleInputValue}
          />
          <FormInput
              id="food-input"
              labelName="Tu comida favorita"
              className="food-input"
              type="text"
              name="food"
              value={this.state.userInfo.food}
              handleInputValue={this.handleInputValue}
          />
          <FormInput
              id="phobia-input"
              labelName="Tu mayor fobia"
              className="phobia-input"
              type="text"
              name="phobia"
              value={this.state.userInfo.phobia}
              handleInputValue={this.handleInputValue}
          />
          <FormInput
              id="hair-input"
              labelName="¿Cómo tienes el pelo?"
              className="hair-input"
              type="text"
              name="hair"
              value={this.state.userInfo.hair}
              handleInputValue={this.handleInputValue}
          />
          <button type='button' className={`${this.state.isValidated ? 'ancestor-button' : 'buttonDisabled'}`} >
            <Link className="link-ancestor" to={{pathname:'/ancestor', state:{userInfo: this.state.userInfo}}} title='Contacta con tus ancestros'>Conoce tus vidas pasadas</Link>
          </button>
      </form>
    </div>
    )}
}

Form.defaultProps = {
  name: 'Marciana', 
  surname: 'Gutierrez',
  age: "35",
  city: "Bogota",
  hate: "que me toquen los pies",
  love: "desayunar en la cama",
  food: "tortilla de patatas sin cebolla",
  phobia: "insectos",
  hair: "liso"
};

export default Form;