import React from 'react';
import { PropTypes } from 'prop-types';



const TextInput = ({ name, onChange, placeholder, title, type, value,className }) => {

  return (
    <div className="form">
      <h5>{title}</h5>

      <input
        type={type}
        placeholder={placeholder}
        className={"search-field"||className}
        value={value || ''}
        onChange={onChange}

        name={name} />
    </div>
  )
}
TextInput.PropTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  className:PropTypes.string
}
export default TextInput;