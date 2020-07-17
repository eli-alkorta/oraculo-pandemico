import React from 'react';

const FormInput = (props) => {

  const updateInputValue = (evt) => {
    props.handleInputValue(evt.currentTarget.name,evt.currentTarget.value)
  }
  return (
    <div className="form-input">     
      <label htmlFor={props.name} className={props.name}>
        {props.labelName}
      </label>
      <input
        className={`${props.id === 'hair-input' ? 'hiddenInputMessage' : ''}`}
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={updateInputValue}
        required
      />
     <select className={`${props.id !== 'hair-input' ? 'hiddenInputMessage' : ''}`} onChange={updateInputValue}name={props.name} id={props.id}>
       <option value=""></option>
       <option value="Liso">liso</option>
       <option value="Rizado">rizado</option>
       <option value="Ondulado">ondulado</option>
       <option value="No tengo pelo">inexistente</option>
     </select>
    </div>
    )}


export default FormInput;