import React from 'react';
import {PropTypes} from 'prop-types';

// const handleInputChange = (e) => {
//     const vacancy = Object.assign({}, this.state.vacancy);
//     vacancy[e.target.name] = e.target.value;
// }

const TextInput = ({name, onChange, placeholder, title,type,value}) => {
    
    return (
        <div className="form">
            <h5>{title}</h5>

            <input
                type={type}
                placeholder={placeholder}
                className="search-field"
                value={value ||''}
                onChange={onChange}
                
                name={name}/>
        </div>
    )
}
TextInput.PropTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type:PropTypes.string.isRequired
}
export default TextInput;