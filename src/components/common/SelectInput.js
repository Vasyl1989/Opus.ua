import React from 'react';
import { PropTypes } from 'prop-types';

const SelectInput = ({ name, title, onChange, options, className, data_placeholder }) => {
    return (
        <div className="form">
            <div className="select">
                <h5>{title}</h5>
                <select
                    data-placeholder={"Full-Time" || data_placeholder}
                    name={name}
                    onChange={onChange}
                    className={"chosen-select-no-single" || className}>
                    {options.map(option => {
                        return <option value={option} key={option}>{option}</option>
                    })}
                </select>
            </div>
        </div>
    );
};

SelectInput.PropTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    title: PropTypes.string,
    className: PropTypes.string,
    data_placeholder: PropTypes.string
};

export default SelectInput;