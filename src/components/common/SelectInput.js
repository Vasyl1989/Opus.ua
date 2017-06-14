import React from 'react';
import {PropTypes} from 'prop-types';

const SelectInput = ({name, title, onChange, options}) => {
    return (
        <div className="form">
            <div className="select">
                <h5>{title}</h5>
                <select
                    data-placeholder="Full-Time"
                    name={name}
                    onChange={onChange}
                    className="chosen-select-no-single">
                    {options.map(option => {
                        return <option value={option} key={option}>{option}</option>
                    })}
                </select>
            </div>
        </div>
    )
}
SelectInput.PropTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
export default SelectInput;