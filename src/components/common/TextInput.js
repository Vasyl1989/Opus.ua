import React from 'react';
import { PropTypes } from 'prop-types';

const TextInput = ({ name, onChange, placeholder, title, type, value }) => {
    return (
        <div className="form">
            <h5>{title}</h5>
            <input
                required
                type={type}
                placeholder={placeholder}
                className="search-field"
                value={value || ''}
                onChange={onChange}

                name={name} />
        </div>
    );
};
TextInput.PropTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
}
export default TextInput;