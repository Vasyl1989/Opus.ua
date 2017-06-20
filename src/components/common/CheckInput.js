import React from 'react';
import { PropTypes } from 'prop-types';

const CheckInput = (name, id, value,title) => {
    <div>
        <input
            type="checkbox"
            name={"check" || name}
            id={id}
            value={value}
        />
        <label for={name}>{title} <span></span></label>
    </div>
}
CheckInput.PropTypes = {
    name: PropTypes.string.isRequired,

}
export default CheckInput;