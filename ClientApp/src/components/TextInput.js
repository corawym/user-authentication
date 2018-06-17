import React from 'react';
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

export default TextInput;