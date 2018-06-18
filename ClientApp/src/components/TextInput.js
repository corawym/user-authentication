import React from 'react';
import PropTypes from 'prop-types';
import './components.css';

const TextInput = (props) => {
    return (
        <input 
            type={props.type} 
            name={props.name}
            value={props.value}
            placeholder={props.placeholder} 
            onChange={props.handleChange}
            className="textInput"
        /> 
    );
}

TextInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func
};

export default TextInput;