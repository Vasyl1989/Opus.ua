import React from 'react';
import {PropTypes} from 'prop-types';

const TextInput = ({name, onChange, placeholder, title,type}) => {
    return (
        <div className="form">
            <h5>{title}</h5>

            <input
                type={type}
                placeholder={placeholder}
                className="search-field"
                onChange={onChange}
                name={name}/>
        </div>
    );
};

TextInput.PropTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type:PropTypes.string.isRequired
};

export default TextInput;