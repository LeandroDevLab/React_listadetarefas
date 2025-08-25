import React from "react";
import PropTypes from "prop-types";

import { FaPlus, FaEdit } from "react-icons/fa";

import "./Form.css";

export default function Form({
  handleChange,
  handleSubmit,
  inputRef,
  novaTarefa,
  buttonClass,
  isEditing,
}) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input
        ref={inputRef}
        onChange={handleChange}
        className="input_novaTarefa"
        type="text"
        value={novaTarefa}
        name="novaTarefa"
      />
      <button className={buttonClass} type="submit">
        {/* O estilo muda com base na classe 'buttonClass' */}
        {isEditing ? <FaEdit /> : <FaPlus />}
      </button>
    </form>
  );
}

//Colocando valor padrão
/* Form.defaultProps = {
  isEditing: false,
}; */

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  novaTarefa: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

//Exemplo com props e props.
export function Form2(props) {
  return (
    <form onSubmit={props.handleSubmit} action="#" className="form">
      <input
        ref={props.inputRef}
        onChange={props.handleChange}
        className="input_novaTarefa"
        type="text"
        value={props.novaTarefa}
        name="novaTarefa"
      />
      <button className={props.buttonClass} type="submit">
        {/* O estilo muda com base na classe 'buttonClass' */}
        {props.isEditing ? <FaEdit /> : <FaPlus />}
      </button>
    </form>
  );
}
